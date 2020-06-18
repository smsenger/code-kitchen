'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.createTable('RecipesCategories', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    recipesId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: 'Recipes',
        id: 'id'
      }
    },
    categoriesId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: 'Categories',
        id: 'id'
      }
   }
  })
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('RecipesCategories');
  }
};
