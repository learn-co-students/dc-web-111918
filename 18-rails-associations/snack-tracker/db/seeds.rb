# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Snack.destroy_all
Retailer.destroy_all

gs = Retailer.create(name: "Girl Scouts", year_established: 1888)
hostess = Retailer.create(name: "Hostess", year_established: 1902)

Snack.create(name: "Dosidos", calories: 500, tastiness: 5, retailer: gs)
Snack.create(name: "Tagalongs", calories: 700, tastiness: 8, retailer: gs)
Snack.create(name: "Twinkies", calories: 700, tastiness: 5, retailer: hostess)
Snack.create(name: "Ho-Hos", calories: 400, tastiness: 4, retailer: hostess)