package models

import "go.mongodb.org/mongo-driver/bson/primitive"

type Country struct {
	Id       primitive.ObjectID `bson:"id,omitempty" json:"id,omitempty"`
	Name string             `bson:"name,omitempty" json:"name,omitempty" validate:"required"`
	Code string             `bson:"code,omitempty" json:"code,omitempty" validate:"required"`
	Visits uint16            `bson:"visits,omitempty" json:"visits,omitempty" `
	Favorites uint16          `bson:"favorites,omitempty" json:"favorites,omitempty" `
}