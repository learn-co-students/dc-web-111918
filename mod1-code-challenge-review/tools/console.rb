require_relative '../config/environment.rb'

def reload
  load 'config/environment.rb'
end
# Insert code here to run before hitting the binding.pry
# This is a convenient place to define variables and/or set up new object instances,
# so they will be available to test and play around with in your console

will = Customer.new("Will", "Ley")
cust2 = Customer.new("Bruno", "Garcia")

puts Customer.all == [will, cust2]

cust3 = Customer.new("Bruno", "Jones")

puts "Find customers by first name?"
puts Customer.find_all_by_first_name("Bruno") == [cust2, cust3]

mcdonalds = Restaurant.new("McDonalds")
bk = Restaurant.new("Burger King")

review1 = Review.new(will, bk, 4, "Terrible tacos")

review2 = cust3.add_review(mcdonalds, "Great heart attack", 5)

will.add_review(mcdonalds, "Great", 4)
will.add_review(bk, "Terrible", 2)


# puts review1.rating == 4
binding.pry
0 #leave this here to ensure binding.pry isn't the last line