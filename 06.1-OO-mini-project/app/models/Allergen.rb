class Allergen
  attr_reader :user, :ingredient
  
  @@all = []

  #should return all of the Allergen instances
  def self.all
    @@all
  end
 #sometimes I will use user_obj or ingredient_obj so that I remember
 #that the arguments are objects and not strings, integers, or other data types
  def initialize(user_obj, ingredient_obj)
    @user = user_obj
    @ingredient = ingredient_obj
    self.class.all << self
  end


end
