package db

import (
	"github.com/alist-org/alist/v3/internal/model"
	"github.com/pkg/errors"
)

func GetUserGroupByName(userGroupName string) (*model.UserGroup, error) {
	userGroup := model.UserGroup{UserGroupName: userGroupName}
	if err := db.Where(userGroup).First(&userGroup).Error; err != nil {
		return nil, errors.Wrapf(err, "failed find user group")
	}
	return &userGroup, nil
}

func GetUserGroupById(id uint) (*model.UserGroup, error) {
	var ug model.UserGroup
	if err := db.First(&ug, id).Error; err != nil {
		return nil, errors.Wrapf(err, "failed get old user group")
	}
	return &ug, nil
}

func CreateUserGroup(ug *model.UserGroup) error {
	return errors.WithStack(db.Create(ug).Error)
}

func UpdateUserGroup(ug *model.UserGroup) error {
	return errors.WithStack(db.Save(ug).Error)
}

func GetUserGroups(pageIndex, pageSize int) (userGroups []model.UserGroup, count int64, err error) {
	userGroupDB := db.Model(&model.UserGroup{})
	if err := userGroupDB.Count(&count).Error; err != nil {
		return nil, 0, errors.Wrapf(err, "failed get user groups count")
	}
	if err := userGroupDB.Offset((pageIndex - 1) * pageSize).Limit(pageSize).Find(&userGroups).Error; err != nil {
		return nil, 0, errors.Wrapf(err, "failed get find user groups")
	}
	return userGroups, count, nil
}

func DeleteUserGroupById(id uint) error {
	return errors.WithStack(db.Delete(&model.UserGroup{}, id).Error)
}
