require "byebug"
# single source principle, division of responsibilities principle
class Owner
  @@all = []
  attr_accessor :name

  def self.reset_all
    @@all.clear
  end

  def self.all
    @@all
  end

  def self.count
    @@all.length
  end

  def initialize(name="human")
    @name = name
    @@all << self
  end

  def set_pet_owner(pet)
    # change pet.owner to self
    pet.owner = self
  end

  def fishes
    Fish.all.select do |fish|
      fish.owner == self
    end
  end

end



# def buy_fish(name)
#   @species = "sad human"
#   pets[:fishes] << Fish.new(name)
# end
#
# def buy_dog(name)
#   pets[:dogs] ||= []
#   pets[:dogs] << Dog.new(name)
# end
#
# def buy_cat(name)
#   pets[:cats] << Cat.new(name)
# end
#
# def walk_dogs
#   pets[:dogs].each do |dog|
#     dog.mood = "happy"
#   end
# end
#
# def play_with_cats
#   pets[:cats].each do |cat|
#     cat.mood = "happy"
#   end
# end
#
# def feed_fish
#   pets[:fishes].each do |fish|
#     fish.mood = "happy"
#   end
# end
#
# def sell_pets
#   # byebug
#   pets.each do |species, animals_array|
#     animals_array.each do |animal|
#       animal.mood = "nervous"
#     end
#     # animals_array.
#   end
#
#   @pets = {fishes:[], :dogs => [], :cats => []}
#
# end
#
# def say_species
#   # byebug
#   "I am a #{species}."
# end
#
# def list_pets
#   "I have #{pets[:fishes].count} fish, #{pets[:dogs].count} dog(s), and #{pets[:cats].count} cat(s)."
# end
