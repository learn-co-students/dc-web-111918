class RecipeIngredient

  # - `RecipeIngredient#ingredient`
  # should return the ingredient instance
  # - `RecipeIngredient#recipe`
  # should return the recipe instance
attr_reader :recipe, :ingredient

  @all = []
  # - `RecipeIngredient.all`
  # should return all of the RecipeIngredient instances
  def self.all
    @all
  end

  def initialize(recipe, ingredient)
    @recipe = recipe
    @ingredient = ingredient
    self.class.all << self
  end




end
