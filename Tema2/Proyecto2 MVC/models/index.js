const originalExit = process.exit;
process.exit = (code) => {
  console.trace('process.exit llamado con código:', code);
  originalExit(code);
};

process.on('exit', (code) => console.log('El proceso terminó con código:', code));

const sequelize = require('../config/database');

const Book = require('./Book');
const User = require('./User');
const Role = require('./Role');
module.exports = { Book, User, Role, sequelize };


// Relación 1:N entre Category y Book
Category.hasMany(Book, {
  foreignKey: 'categoryId',
  as: 'books'
});

Book.belongsTo(Category, {
  foreignKey: 'categoryId',
  as: 'category'
});


module.exports = {
  sequelize,
  User,
  Book,
  Category
};