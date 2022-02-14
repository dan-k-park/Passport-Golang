package models

type User struct {
	Username string             `bson:"username,omitempty" json:"username,omitempty" validate:"required,min=6,max=15"`
	Password string             `bson:"password,omitempty" json:"password,omitempty" validate:"required,min=6,max=12"`
}