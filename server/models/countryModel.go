package models

import "go.mongodb.org/mongo-driver/bson/primitive"

type Country struct {
	Id       primitive.ObjectID `bson:"id,omitempty" json:"id,omitempty"`
	Name string             `bson:"name,omitempty" json:"name,omitempty" validate:"required"`
	Code string             `bson:"code,omitempty" json:"code,omitempty" validate:"required"`
	Visits int             `bson:"visits,omitempty" json:"visits,omitempty" validate:"required"`
	Favorites int             `bson:"Favorites,omitempty" json:"Favorites,omitempty" validate:"required"`
}