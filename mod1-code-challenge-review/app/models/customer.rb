class Customer
  attr_accessor :first_name, :last_name

  @@all = []

  def initialize(first_name, last_name)
    @first_name = first_name
    @last_name  = last_name
    @@all << self
  end

  def full_name
    "#{first_name} #{last_name}"
  end

  def self.all
    return @@all 
  end

  def self.find_by_name(name)
    # given a string of a **full name**, 
    # returns the **first customer** whose 
    # full name matches
        Customer.all.find do |customer|
            customer.full_name == name
        end
   end

   def self.find_all_by_first_name(name)
        # given a string of a first name, returns 
        # an **array** containing all customers with 
        # that first name
        Customer.all.select do |customer|
            customer.first_name == name
        end
   end

   def self.all_names
    # should return an **array** of all of the customer full names
    Customer.all.collect do |cust|
        cust.full_name
    end
   end

   def add_review(restaurant, content, rating)
        new_review = Review.new(self, restaurant, rating, content)
        return new_review
   end

   def reviews
    # returns all reviews by this customer
        Review.all.select do |review|
            review.customer == self
        end
   end

   def num_reviews
        self.reviews.length
   end

   def restaurants
    # returns unique array of all restaurants this customer has reviewed
        self.reviews.collect do |review|
            review.restaurant
        end.uniq
   end


end

# Customer.all