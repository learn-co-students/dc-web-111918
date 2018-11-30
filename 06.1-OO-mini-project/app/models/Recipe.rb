class Recipe

  attr_reader :name

  @@all = []
  # - `Recipe.all`
  # should return all of the recipe instances
  def self.all
    @@all
  end

  def initialize(name)
    @name = name
    self.class.all << self
  end


  # - `Recipe.most_popular`
  # should return the recipe instance with the
  # highest number of users (the recipe that has the most recipe cards)
  def self.most_popular
    recipe_user_hash ={}
    self.all.each do |recipe|
     recipe_user_hash[recipe] = recipe.users.length
    end
    recipe_user_hash.sort_by {|recipe, num| num}[-1][0]
  end

  # - `Recipe#users`
  # should return the user instances who have recipe cards with this recipe
  def users
    recipes = RecipeCard.all.select { |recipecard| recipecard.recipe == self}
    recipes.collect {|recipe_card| recipe_card.user}
  end

  # - `Recipe#ingredients`
  # should return all of the ingredients in this recipe
  def ingredients
    recipes = RecipeIngredient.all.select { |recipeing| recipeing.recipe == self}
    recipes.collect {|recipeing| recipeing.ingredient}
  end


  # - `Recipe#allergens`
  # should return all of the ingredients in this recipe that are allergens
  def allergens
    ing = self.ingredients
    ing.select do |ingredient|
       Allergen.all.any? do |allergen|
         allergen.ingredient == ingredient
      end
    end

  end


  # - `Recipe#add_ingredients`
  # should take an array of ingredient instances as an argument,
  #and associate each of those ingredients with this recipe

  def add_ingredients(ing_array)
    ing_array.each do |ing|
      RecipeIngredient.new(self, ing)
    end
  end

end
