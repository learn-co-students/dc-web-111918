require_relative '../config/environment'
require "pry"

dude = Owner.new("dude")
felix = Cat.new("Felix", dude)
dave = Fish.new("dave", dude)
daniel = Fish.new("daniel", dude)
byebug
RSpec.configure do |config|
  # config here
end
