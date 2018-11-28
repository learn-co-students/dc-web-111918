class Fish
  attr_reader :name
  attr_accessor :mood, :owner

  @@all = []

  def self.all
    @@all
  end

  def self.destroy_fish(fish)
    all.delete_if do |ele|
      ele == fish
    end
  end

  def initialize(name, owner=nil)
    @name = name
    @owner = owner
    @mood = "nervous"
    @@all << self
  end
end
