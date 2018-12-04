class Restaurant
  attr_accessor :name

  @@all = []

  def initialize(name)
    @name = name
    @@all << self
  end

  def self.all
    return @@all 
  end

  def self.find_by_name(name)
    matching_restaurants = Restaurant.all.select do |r|
        r.name == name
    end
    return matching_restaurants
  end

end
