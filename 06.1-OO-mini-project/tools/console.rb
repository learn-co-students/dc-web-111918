require_relative '../config/environment.rb'

user1 = User.new("Will")
user2 = User.new("Bruno")
user3= User.new("Paul")

recipe1 = Recipe.new("PBJ Sandwich")
recipe2 = Recipe.new("Cheese Enchlada")
recipe3 = Recipe.new("Tortilla and Cinnamon")
recipe4 = Recipe.new("Stake")

ing1 = Ingredient.new("cheese")
ing2 = Ingredient.new("peanut butter")
ing3 = Ingredient.new("cinnamon")
ing4 = Ingredient.new("butter")
ing5 = Ingredient.new("tortilla")
ing6 = Ingredient.new("jelly")

rc1 = RecipeCard.new("9/19", 5, user1, recipe1)
rc2 = RecipeCard.new("11/20", 10, user1, recipe3)
rc3 = RecipeCard.new("11/22", 1000, user1, recipe2)
rc3 = RecipeCard.new("11/19", 5, user2, recipe1)
rc4 = RecipeCard.new("11/23", 6, user1, recipe4)
rc5 = RecipeCard.new("12/9", 6, user1, recipe4)
rc6 = RecipeCard.new("12/9", 6, user3, recipe1)


a1= Allergen.new(user1, ing1)
a2 = Allergen.new(user1, ing2)
a3 = Allergen.new(user2, ing1)
user1.declare_allergen(ing6)

re1 = RecipeIngredient.new(recipe1, ing2)
re2 = RecipeIngredient.new(recipe1, ing5)
re3 = RecipeIngredient.new(recipe1, ing6)



user2.add_recipe_card("11/20", 10, recipe3)

print user1.recipes
puts " "
print user2.recipes


puts "Top Three Recipes"
puts ""

print user1.top_three_recipes

puts ""
puts ""
puts "Most Recent:"
print user1.most_recent_recipe.inspect
puts ""
puts ""
puts "Most Allergic Ingredient:"

print Ingredient.most_common_allergen.inspect

puts ""
puts ""
puts "User's Allergic Ingredients:"

puts "User1"
puts user1.allergens.inspect

puts "User2"
puts user2.allergens.inspect

# - `Recipe#users`
# should return the
#user instances who have recipe cards with this recipe
puts "Recipe Users"
puts recipe1.users.inspect

puts "Most popular Recipe"
puts Recipe.most_popular.inspect

puts "Recipe Ingredients PBJ Sandwich"
puts recipe1.ingredients.inspect

puts "Adding ingredients to Cheese enchalada"
ing_array = [ing5, ing1, ing1, ing1, ing1]
recipe2.add_ingredients(ing_array)
puts recipe2.ingredients.inspect


puts "Allergens in Cheese Enchalads"
puts recipe2.allergens.inspect

puts "Allergens in PBJ Sandwich"
puts recipe1.allergens.inspect
