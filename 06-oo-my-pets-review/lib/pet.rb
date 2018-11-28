class Pet
  attr_reader :name
  attr_accessor :mood, :owner

  @@all = []
  def initialize(name, owner=nil)
    @name = name
    @owner = owner
    @mood = "nervous"
    @@all << self
  end
end
