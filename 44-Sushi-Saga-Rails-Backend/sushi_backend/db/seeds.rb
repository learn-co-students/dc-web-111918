# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# fetch to the third party api (aka json-server)
url_to_fetch = "http://localhost:9090/sushis"
response = RestClient.get(url_to_fetch)

sushiArray = JSON.parse(response.body)

# use the sushiArray from fetch to Sushi.create all of the sushi

sushiArray.each do |sushiHash|
    Sushi.create(price: sushiHash["price"], name: sushiHash["name"], img_url: sushiHash["img_url"])
end


byebug
"hello"
