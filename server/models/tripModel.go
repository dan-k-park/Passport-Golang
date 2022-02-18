package models

import "go.mongodb.org/mongo-driver/bson/primitive"

type Trip struct {
	Id primitive.ObjectID `bson:"id,omitempty" json:"id,omitempty"`
	Country string             `bson:"country,omitempty" json:"country,omitempty" validate:"required"`
	Favorite *bool             `bson:"favorite,omitempty" json:"favorite,omitempty" validate:"required"`
	Favorite_Thing    string             `bson:"favorite_thing,omitempty" json:"favorite_thing,omitempty" validate:"required"`
	Traveler_Id	string    `bson:"traveler_id,omitempty" json:"traveler_id,omitempty"`
	Traveler	string    `bson:"traveler,omitempty" json:"traveler,omitempty"`
}