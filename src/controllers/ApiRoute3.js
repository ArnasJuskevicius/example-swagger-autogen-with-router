const express = require('express')


// createPetsAPI arguments used for dependency injection DB, services, etc.
const createPetsAPI = () => {
    const pets = [
        {name: "Spark", id: 1},
        {name: "Blacky", id: 2}
    ]

    const getAll = async (req, res) => {
      res.status(200).json({
          data: pets,
      })
    }

    const getOne = async (req, res) => {
        res.status(200).json({
            data: pets[0],
        })
      }
  
    return express.Router().get('/', getAll).get('/:id', getOne)
}

module.exports = createPetsAPI
