package models

import "go.mongodb.org/mongo-driver/bson/primitive"

type User struct {
	Id       primitive.ObjectID `bson:"id,omitempty" json:"id,omitempty"`
	Username string             `bson:"username,omitempty" json:"username,omitempty" validate:"required,min=6,max=15"`
	Password string             `bson:"password,omitempty" json:"password,omitempty" validate:"required,min=6,max=12"`
}