// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id', 
});

// Categories have many Products
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id',
});


// Products belongToMany Tags (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag, 
  foreignKey: 'tag_id', 
});

// Tags belongToMany Products (through ProductTag)

// A Category has many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
});


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
