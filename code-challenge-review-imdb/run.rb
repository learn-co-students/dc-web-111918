require_relative "actor.rb"
require_relative "character.rb"
require_relative "movie.rb"
require_relative "character_movie.rb"
require 'pry'
tom = Actor.new("Tom Hanks")
keanu = Actor.new("Keanu Reeves")
ted = Character.new("Ted Theodore Logan", keanu)
woody = Character.new("Woody", tom)
forrest = Character.new("Forrest Gump", tom)
# print tom.characters # list all of tom hanks' characters

toy_story = Movie.new("Toy Story")
toy_story2 = Movie.new("Toy Story 2")
excellent = Movie.new("Bill and Ted's Excellent Adventure")

CharacterMovie.new(woody, toy_story)
CharacterMovie.new(woody, toy_story2)
CharacterMovie.new(ted, excellent)

puts woody.movies == [toy_story, toy_story2]
puts woody.movie_titles == ["Toy Story", "Toy Story 2"]
print woody.movies

Character.most_movies == woody

binding.pry

0