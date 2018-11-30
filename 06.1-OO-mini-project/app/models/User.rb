require "pry"
class User

  #thinking behind this is that a person might change their name
  #so we need a reader and writer
  attr_accessor :name

  @@all = []

  # - `User.all`
  # should return all of the user instances
  def self.all
    @@all
  end

  def initialize(name)
    @name = name
    self.class.all << self
  end

  # Returns a list of recipies that the user has recipecards
  def recipes
    self.recipe_cards.map {|recipecard| recipecard.recipe}
  end

  def recipe_cards
    RecipeCard.all.select { |recipecard| recipecard.user == self}
  end
  # should accept a recipe instance as an argument,
  # as well as a date and rating, and create a
  # new recipe card for this user and the given recipe
  def add_recipe_card(date, rating, recipe_obj)
    RecipeCard.new(date, rating, self, recipe_obj)
  end


  # should return the top three highest rated
  # recipes for this user.
  def top_three_recipes
    my_recipes = self.recipe_cards
    my_recipes.sort{|a, b| b.rating <=> a.rating }.slice(0,3)
  end

  # - `User#most_recent_recipe`
  # should return the recipe most
  # recently added to the user's cookbook.
  def most_recent_recipe
    my_recipes = self.recipe_cards
    my_recipes.sort_by do |rec_card|
      [
        rec_card.date.split("/")[0].to_i,
        rec_card.date.split("/")[1].to_i
      ]
    end[-1]
  end



  # should accept an
  # ingredient instance as an argument,
  # and create a new allergen instance
  # for this user and the given ingredient
  def declare_allergen(ing_obj)
    Allergen.new(self, ing_obj)
  end


  # should return all of the ingredients
  # this user is allergic to
  def allergens
    users_allergens = Allergen.all.select { |allergen| allergen.user == self}
    users_allergens.collect {|allergen| allergen.ingredient}
  end


  # - `User#safe_recipes`
  # should return all recipes that do not
  #   contain ingredients the user is allergic to
  # - What other methods might be useful to have?


end
