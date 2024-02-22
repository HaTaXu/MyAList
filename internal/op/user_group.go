package op

import (
	"time"

	"github.com/Xhofe/go-cache"
	"github.com/alist-org/alist/v3/internal/db"
	"github.com/alist-org/alist/v3/internal/errs"
	"github.com/alist-org/alist/v3/internal/model"
	"github.com/alist-org/alist/v3/pkg/singleflight"
	"github.com/alist-org/alist/v3/pkg/utils"
)

var userGroupCache = cache.NewMemCache(cache.WithShards[*model.UserGroup](2))
var userGroupG singleflight.Group[*model.UserGroup]

func GetUserGroupByName(userGroupName string) (*model.UserGroup, error) {
	if userGroupName == "" {
		return nil, errs.EmptyUserGroupName
	}
	if userGroup, ok := userGroupCache.Get(userGroupName); ok {
		return userGroup, nil
	}
	userGroup, err, _ := userGroupG.Do(userGroupName, func() (*model.UserGroup, error) {
		_userGroup, err := db.GetUserGroupByName(userGroupName)
		if err != nil {
			return nil, err
		}
		userGroupCache.Set(userGroupName, _userGroup, cache.WithEx[*model.UserGroup](time.Hour))
		return _userGroup, nil
	})
	return userGroup, err
}

func GetUserGroupById(id uint) (*model.UserGroup, error) {
	return db.GetUserGroupById(id)
}

func GetUserGroups(pageIndex, pageSize int) (userGroups []model.UserGroup, count int64, err error) {
	return db.GetUserGroups(pageIndex, pageSize)
}

func CreateUserGroup(ug *model.UserGroup) error {
	ug.BasePath = utils.FixAndCleanPath(ug.BasePath)
	return db.CreateUserGroup(ug)
}

func DeleteUserGroupById(id uint) error {
	old, err := db.GetUserGroupById(id)
	if err != nil {
		return err
	}
	userGroupCache.Del(old.UserGroupName)
	return db.DeleteUserGroupById(id)
}

func UpdateUserGroup(ug *model.UserGroup) error {
	old, err := db.GetUserGroupById(ug.ID)
	if err != nil {
		return err
	}
	userGroupCache.Del(old.UserGroupName)
	ug.BasePath = utils.FixAndCleanPath(ug.BasePath)
	return db.UpdateUserGroup(ug)
}

func DelUserGroupCache(userGroupName string) error {
	_, err := GetUserGroupByName(userGroupName)
	if err != nil {
		return err
	}
	userGroupCache.Del(userGroupName)
	return nil
}
