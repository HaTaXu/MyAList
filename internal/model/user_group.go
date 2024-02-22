package model

type UserGroup struct {
	ID            uint   `json:"id" gorm:"primaryKey"`                             // unique key
	UserGroupName string `json:"user_group_name" gorm:"unique" binding:"required"` // user group name
	Size          int32  `json:"size"`                                             // user group size
	BasePath      string `json:"base_path"`                                        // base path
	Permission    int32  `json:"permission"`
	Disabled      bool   `json:"disabled"`
}
