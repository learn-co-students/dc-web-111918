class Ingredient

  attr_reader :name

  @@all = []

  # should return all of the ingredient instances
  def self.all
    @@all
  end

  def initialize(name)
    #this is data normalization step. Here I am downcasing the name so that
    # if a user puts "Peanut" or "peanut" the name will be the same.
    # later, you would use this to make sure there are no duplicate objects
    @name = name.downcase
    self.class.all << self
  end

  # - `Ingredient.most_common_allergen`
  # should return the ingredient instance
  # that the highest number of users are allergic to
  def self.most_common_allergen
    allergen_hash = {}
    #itterate through all of the allergens and
    #count each of the occurances of those objects
    Allergen.all.each do |allergen|
      if allergen_hash[allergen.ingredient]
        allergen_hash[allergen.ingredient] += 1
      else
        allergen_hash[allergen.ingredient] = 1
      end
    end
      # sort hash by value, give me the last element, and
      # the first element of that which is the ing object
    allergen_hash.sort_by {|ingredient, num| num}[-1][0]
  end





end
