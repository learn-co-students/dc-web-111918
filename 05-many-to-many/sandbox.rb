class School

    attr_reader :name, :instructors
    def initialize(name)
        @name = name
        @instructors = []
    end

    def add_instructor(instructor_name, salary)
        new_instructor = Instructor.new(instructor_name, salary)
        @instructors << new_instructor
    end

    # def read_instructors
    #     @instructors
    # end
    # def change_name(new_name)
    #     @name = new_name
    # end

    # def instructors
    #     @instructors
    # end

end

class Instructor

    attr_reader :name

    def initialize(name, salary)
        @name = name
        @salary = salary
    end

    def give_a_raise(big_money)
        @salary += big_money
    end

end

flatiron = School.new("Flatiron")

flatiron.add_instructor("Paul Nichols", 1000) 
flatiron.add_instructor("Will Ley", 2000)
flatiron.add_instructor("Bruno Garcia", 3000)

will = flatiron.instructors.find do |instructor|
    instructor.name == "Will Ley"
end

will.give_a_raise(10**6)


Instructor.new("Ann", "10**9")

print flatiron.instructors

# flatiron.instructors("Paul Nichols").name = "Paul Nicholsen"