class Character

    attr_accessor :name, :actor

    @@all = []

    def initialize(name, actor)
        @name = name
        @actor = actor
        @@all << self
    end

    def self.all
        @@all 
    end

    def movies
        # get all movies this character
        # has appeared in
        results = CharacterMovie.all.select do |x|
            x.character == self
        end
        movies = results.collect do |result|
            result.movie
        end
    end

    def movie_titles
        # get the titles of all the movies this
        # character has appeared in
        movies = self.movies 
        movies.collect do |movie|
            movie.title
        end
    end

    def self.most_movies

    end
end