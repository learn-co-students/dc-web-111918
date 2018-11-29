
class Cat
  attr_reader :name
  attr_writer :owner
  attr_accessor :mood

  @@all = []

  def owner
    @owner
  end


  def initialize(name, owner=nil)
    @name = name
    @owner = owner
    @mood = "nervous"
    @@all << self
  end

  def eat_nearby_fish
    # if cat has owner
    if owner
      # if owner has at least one fish
      if owner.fishes.length > 0
        # then eat fish

        # mood is set to happy
        mood = "happy"

        # fish instance is destroyed
        # the Fish @@all array should not have it anymore
        to_be_eaten = owner.fishes.sample
        Fish.destroy_fish(to_be_eaten)

        "#{name} has eaten #{to_be_eaten.name}"
      else
        "no nearby fish!"
      end

    else

       "this stray cat has no fish nearby"
    end

  end
end
