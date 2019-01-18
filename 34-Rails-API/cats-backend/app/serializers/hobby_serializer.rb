class HobbySerializer < ActiveModel::Serializer
  attributes :name, :duration
  has_many :cats
end
