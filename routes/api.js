var express = require('express');
var router = express.Router();
const db = require('../models')

/* GET home page. */
router.get('/recipes', function (req, res, next) {
  db.Recipes.findAll({
    include: [{
      model: db.Categories,
      through: {
        attributes: []
      }
    }],
    // attributes: ['name']        //to include only particular attributes
    // attributes : {             //to exclude attributes
    //   exclude: ['description']
    // }
  })
    .then(data => {
      res.json(data)
    })
});

router.get('/recipes/:id', (req, res) => {
  db.Recipes.findByPk(req.params.id, {
    include: [{
      model: db.Categories,
      through: {
        attributes: []
      }
    }]
  })
    .then(data => {
      res.json(data);
    })
})

router.post('/recipes', (req, res) => {
  const { name, review, description, url, likes, vegetarian, vegan, glutenFree, categories } = req.body;

  if (!name) { res.status(400).json({ error: 'name field is required' }); }
  if (!review) { res.status(400).json({ error: 'review field is required' }); }
  if (!description) { res.status(400).json({ error: 'description field is required' }); }
  if (!url) { res.status(400).json({ error: 'url field is required' }); }


  db.Recipes.create({
    name: name,
    review: review,
    description: description,
    url: url,
    likes: likes || 0,
    vegetarian: vegetarian || false,
    vegan: vegan || false,
    glutenFree: glutenFree || false,
  })
    .then(recipe => {
      return recipe.addCategories(categories)
        .then((categories) => {
          res.status(201).json(recipe);
        })
        .catch(error => {
          if (error.name === "SequelizeForeignKeyConstraintError") {
            res.json({ error: 'could not find all categories' })
          } else {
            res.json({ error: 'server error' })
          }
        })
    })
})


router.delete('/recipes/:id', (req, res) => {
  db.Recipes.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(number => {
      if (number > 0) {
        res.status(204).json({});
      } else {
        res.json({ error: `Could not find recipe with id: ${req.params.id}` })
      }
    })
})

module.exports = router;
