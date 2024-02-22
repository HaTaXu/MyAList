package errs

import "errors"

var (
	EmptyUserGroupName = errors.New("user group name is empty")
)
