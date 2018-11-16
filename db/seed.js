const User = require('../models/User')
const Character = require('../models/Character')
const mongoose = require('./connection')

//  ===== Characters: 3 =====
const Humperdinkle = new Character({
    name: `Humperdinkle`,
    age: 20,
    gender: `Male`,
    heightinfeet: 5,
    heightininches: 9,
    race: `Shadow - Elf`,
    weapon: `Magic`,
    group: `Ranger`,
    subgroup: `Assassin`
})

const Algol = new Character({
    name: `Algol`,
    age: 1000,
    gender: `Agender`,
    heightinfeet: 6,
    heightininches: 10,
    race: `Demi - God`,
    weapon: `Sword`,
    group: `Barbarian`,
    subgroup: `None`,
})

const Storm = new Character({
    name: `Ororo`,
    age: 47,
    gender: `Female`,
    heightinfeet: 5,
    heightininches: 11,
    race: `Human`,
    weapon: `Magic`,
    group: `Sorcerer`,
    subgroup: `Elemental`
})

const Rashad = new User({
    username: `RaFl91`,
    img: `https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjdj96hntneAhUJylMKHYu6Bm4QjRx6BAgBEAU&url=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fserious-face_19866&psig=AOvVaw0wi-Hy54KwqI5gDP9zaSdh&ust=1542468803447213`,
    characters: [Humperdinkle, Storm]
})

const Smile = new User({
    username: `SmileSmile5eva`,
    img: `https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwinoJq0otneAhXLz1MKHSUsAHsQjRx6BAgBEAU&url=https%3A%2F%2Fzaidanca.wordpress.com%2F2017%2F07%2F15%2F08-orientalist-paintings-by-artists-from-the-19th-century-with-footnotes-18%2F&psig=AOvVaw3v5_MyN5Xcew0Yp0gXkwcL&ust=1542469854804883`,
    characters: [Algol]
})

User.remove({})
    .then(() => Character.insertMany([Humperdinkle, Algol, Storm]))
    .then(() => Rashad.save())
    .then(() => Smile.save())
    .then(() => console.log(`Database seeding success`))
    .then(() => mongoose.connection.close())