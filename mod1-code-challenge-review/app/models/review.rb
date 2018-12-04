class Review

    attr_accessor :content
    attr_reader :customer, :restaurant, :rating

    @@all = []

    def initialize(customer, restaurant, rating, content)
        @customer = customer
        @restaurant = restaurant
        @content = content

        # self.rating = rating
        self.rating=(rating)
        
        @@all << self
    end
  
    def self.all 
        return @@all 
    end

    # def rating
    #     return @rating
    # end

    def rating=(new_rating)
        if new_rating > 5
            @rating = 5
        elsif new_rating < 1
            @rating = 1
        else
            @rating = new_rating
        end
    end


end

# Review.new(will, mcdonalds, 5, "This was great")