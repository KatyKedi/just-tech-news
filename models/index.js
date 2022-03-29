const User = require("./User");
const Post = require("./Post");

// create associations
//we are defining the relationship of the Post model to the User. The constraint we impose here is that a post can belong to one user, but not many users
User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { User, Post };