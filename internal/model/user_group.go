package model

import "gorm.io/gorm"

type UserGroup struct {
	ID            uint   `json:"id" gorm:"primaryKey"`                             // unique key
	UserGroupName string `json:"user_group_name" gorm:"unique" binding:"required"` // user group name
	UgnApplyToAll bool   `json:"ugn_apply_to_all"`
	Size          int32  `json:"size"`      // user group size
	BasePath      string `json:"base_path"` // base path
	BpApplyToAll  bool   `json:"bp_apply_to_all"`
	Permission    int32  `json:"permission"`
	PmsApplyToAll bool   `json:"pms_apply_to_all"`
	Disabled      bool   `json:"disabled"`
}

func (ug *UserGroup) BeforeUpdate(db *gorm.DB) error {
	var userGroup UserGroup
	err := db.Debug().First(&userGroup, ug.ID).Error
	if err != nil {
		return err
	}
	if ug.BpApplyToAll {
		err = db.Model(&User{}).Where("user_group = ?", userGroup.UserGroupName).Update("base_path", ug.BasePath).Error
		if err != nil {
			return err
		}
	}
	if ug.PmsApplyToAll {
		err = db.Model(&User{}).Where("user_group = ?", userGroup.UserGroupName).Update("permission", ug.Permission).Error
		if err != nil {
			return err
		}
	}
	if ug.UgnApplyToAll {
		err = db.Model(&User{}).Where("user_group = ?", userGroup.UserGroupName).Update("user_group", ug.UserGroupName).Error
		if err != nil {
			return err
		}
	}
	return nil
}
