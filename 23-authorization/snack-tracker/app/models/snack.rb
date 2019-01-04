class Snack < ApplicationRecord
    belongs_to :retailer, optional: true
    has_and_belongs_to_many :users
    validates(:name, {presence: true})
    validates :calories, presence: true
    validates :tastiness, presence: true
end
