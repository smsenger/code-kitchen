'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Categories', [{
      name: 'Breakfast',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Lunch',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Dinner',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Simple',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Fancy',
      createdAt: new Date(),
      updatedAt: new Date()
    }

    ])


    await queryInterface.bulkInsert('Recipes', [{
      name: 'Banana Bread',
      review: "Just like grandma's",
      description: 'Rich and tasty banana bread',
      url: 'http://url.com',
      likes: 5,
      vegetarian: true,
      vegan: false,
      glutenFree: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Chicken Pot Pie',
      review: 'Almost as good as mine',
      description: 'Large chicken pot pie',
      url: 'http://url.com',
      likes: 50,
      vegetarian: false,
      vegan: false,
      glutenFree: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Peach Pie',
      review: 'Very peachy!',
      description: 'Biggest pie in Georgia',
      url: 'http://url.com',
      likes: 50,
      vegetarian: false,
      vegan: false,
      glutenFree: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Cheezy Pasta',
      review: 'Awesome comfort food',
      description: 'Pasta with goat cheese',
      url: 'http://url.com',
      likes: 50,
      vegetarian: true,
      vegan: false,
      glutenFree: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Chocolate chip cookies',
      review: 'Best comfort treat ever',
      description: 'Awesome chocolate chip cookies',
      url: 'http://url.com',
      likes: 5000,
      vegetarian: false,
      vegan: false,
      glutenFree: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});


    return await queryInterface.bulkInsert('RecipesCategories', [{
      recipesId: 1,
      categoriesId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      recipesId: 1,
      categoriesId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      recipesId: 1,
      categoriesId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      recipesId: 2,
      categoriesId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      recipesId: 2,
      categoriesId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('RecipesCategories', null, {})
    await queryInterface.bulkDelete('Recipes', null, {})
    await queryInterface.bulkDelete('Categories', null, {})
  }
};





