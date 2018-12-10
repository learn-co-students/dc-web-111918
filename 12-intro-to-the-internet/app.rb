require_relative './config/environment.rb'

class App

  def call(env)
    resp = Rack::Response.new
    resp.write("Hello, World")
    resp.finish
  end

end