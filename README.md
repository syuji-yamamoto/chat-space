# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

chat-space データベース設計

## userテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, foreign_key: true|
|address|integer|null: false, unique: true|

### Association
- has_many :group_users
- has_many :messages
- has_many :groups, through: :groups_users

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|text|text|
|image|string|
|user_id|integer|:null false, foreign_key: true|
|groups_id|integer|:null false, foreign_key: true|


### Association
- belongs_to :user
- belongs_to :group

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|groups_id|integer|:null false, foreign_key: true|

### Association
- has_many :group_users
- has_many :user, through: :groups_users
- has_many :messages

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user