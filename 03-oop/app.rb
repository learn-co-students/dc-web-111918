class Cat

    attr_accessor :color, :number_of_legs
    attr_writer :floofiness
    # def floofiness=(floofiness)
        # @floofiness = floofinesss
    # end
    attr_reader :name

    @@all = []

    def initialize(name, color, floofiness, number_of_legs=4)
        @name = name
        @color = color
        @floofiness = floofiness
        @number_of_legs = number_of_legs
        @@all << self

    end

    def self.all
        # return an array of all Cat instances
        @@all
    end

    def self.all_names
        # @@all = [<Cat: Ella> <Cat: Lexi>]
        self.all.collect do |cat|
            cat.name
        end
    end

    def say_your_color
        puts "I am a #{self.color} cat"
    end

    # def puts_self
    #     puts self
    # end

    def floofiness
        if @floofiness > 6
            puts "You are a very floofy kitty"
        else
            puts "You are not so floofy, but still better than a dog"
        end
    end

    def say_your_class
        print self.class.name
    end
end

ella = Cat.new("Ella", "black", 10)
lexi = Cat.new("Lexi", "orange", 5, 3)
# print Cat.all
# print Cat.all_names
# puts ella.name == lexi.name
# puts ella.puts_self

# ella.say_your_class

