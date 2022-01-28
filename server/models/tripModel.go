package models

import "go.mongodb.org/mongo-driver/bson/primitive"

type Trip struct {
	Id       primitive.ObjectID `json:"id,omitempty"`
	Country string             `json:"location,omitempty" validate:"required"`
	Favorite bool             `json:"favorite,omitempty" validate:"required"`
	Favorite_Thing    string             `json:"favorite_thing,omitempty" validate:"required"`
}