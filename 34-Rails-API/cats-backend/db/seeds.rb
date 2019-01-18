# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Cat.create(name: "Maru", fluffiness: 3, mean: true, picture: "https://static.boredpanda.com/blog/wp-content/uploads/2017/04/maru-cat-box-hairstyles-2-58e48de5887a6__700.jpg")
Cat.create(name: "Faker", fluffiness: 10, mean: false, picture: "https://static.boredpanda.com/blog/wp-content/uploads/2015/12/fluffy-cat-funny-pics-25__605.jpg")
Cat.create(name: "Grumpy", fluffiness: 4, mean: true, picture: "https://www.grumpycats.com/images/about/tardar.jpg")
Cat.create(name: "Meowth", fluffiness: 1, mean: true, picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/052.png")

Hobby.create(name: "Play with Yarn", duration: 5)
Hobby.create(name: "Stalking Owner", duration: 1000)
Hobby.create(name: "Hunt for rats", duration: 30)

CatHobby.create(cat_id: 1, hobby_id: 1)
CatHobby.create(cat_id: 1, hobby_id: 2)
CatHobby.create(cat_id: 1, hobby_id: 3)
CatHobby.create(cat_id: 2, hobby_id: 2)
CatHobby.create(cat_id: 2, hobby_id: 3)
CatHobby.create(cat_id: 3, hobby_id: 1)
CatHobby.create(cat_id: 4, hobby_id: 1)
CatHobby.create(cat_id: 4, hobby_id: 2)
CatHobby.create(cat_id: 4, hobby_id: 3)
