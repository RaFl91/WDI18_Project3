const User = require('../models/User')
const Character = require('../models/Character')

const characterController = {
    index: (req, res) => {
        var userId = req.params.userId
        User.findById(userId).populate('characters')
            .then((user) => {
                res.send(user.characters)
            })
    },
    show: (req, res) => {
        var characterId = req.params.charactId
        Character.findById(characterId)
            .then((character) => {
                res.send(character)
            })
    },
    delete: (req, res) => {
        var characterId = req.params.characterId
        Character.findByIdAndDelete(characterId)
            .then(() => {
                res.send(200)
            })
    },
    update: (req, res) => {
        var characterId = req.params.characterId
        Character.findByIdAndUpdate(characterId, req.body, { new: true })
            .then((updatedCharacter) => {
                updatedCharacter.save()
                res.send(updatedCharacter)
            })
    },
    create: (req, res) => {
        var userId = req.params.userId
        User.findById(userId)
            .then((user) => {
                console.log(user)
                Character.create(req.body)
                    .then((newCharacter) => {
                        console.log(newCharacter)
                        user.ideas.push(newCharacter)
                        user.save()
                        res.send(newCharacter)
                    })
            })
    }

}

module.exports = characterController