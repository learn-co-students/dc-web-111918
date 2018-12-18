# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Snack.destroy_all

Snack.create(name: "Chicken Fingers", calories: 500, tastiness: 5)
Snack.create(name: "Mozzarella Sticks", calories: 700, tastiness: 8)
Snack.create(name: "Sliders", calories: 700, tastiness: 5)
Snack.create(name: "Donuts", calories: 400, tastiness: 4)