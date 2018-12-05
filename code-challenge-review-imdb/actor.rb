class Actor

    attr_accessor :name
    attr_reader :age

    @@all = []

    def initialize(new_name)
        @name = new_name
        @@all << self
    end

    def self.all # will be called by the Class (class method)
        @@all 
    end

    def characters 
        Character.all.select do |character|
            character.actor == self
        end
    end

end


# -------
# print tom.name.upcase.slice(3..7)
# print tom.age
# meryl = Actor.new("Meryl Streep")
# daniel = Actor.new("Daniel Radcliffe")
# print Actor.all


