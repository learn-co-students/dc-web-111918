class CatSerializer < ActiveModel::Serializer
  attributes :id, :name, :fluffiness, :mean, :picture
  has_many :hobbies
end
