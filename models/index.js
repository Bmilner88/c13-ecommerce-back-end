// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo({
  foreignKey: ''
});

// Categories have many Products
Category.hasMany({
  foreignKey: ''
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany({
  through: ProductTag,
  as: '',
  foreignKey: ''
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany({
  through: ProductTag,
  as: '',
  foreignKey: ''
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
