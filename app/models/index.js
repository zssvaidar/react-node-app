// /* 
//   Sql
//     users
//     |
//     user {name, email, phone, website, address}
//     |   \
//     |    \
//     |     \ 
//     posts  \
//     |       \
//     |        albums ——————— album {preview picture, pictures, description}
//     |
//     post (title, contents)
//     |
//     |
//     comments 
//     |
//     |
//     comment {name, email, text}
//  */

const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");

var fs = require('fs');
var path = require('path');
var basename = path.basename(module.filename);

const sequelize = new Sequelize({
  dialect: dbConfig.dialect,
  // Пусть к файлу с базой данных
  storage: dbConfig.storage,
  operatorsAliases: false,

});

// const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
//   host: dbConfig.HOST,
//   dialect: dbConfig.dialect,
//   operatorsAliases: false,
//   storage: dbConfig.storage,

//   pool: {
//     max: dbConfig.pool.max,
//     min: dbConfig.pool.min,
//     acquire: dbConfig.pool.acquire,
//     idle: dbConfig.pool.idle
//   }
// });

const db = {};
fs
    .readdirSync(__dirname)
    .filter(function (file) {
        return (file.indexOf('.') !== 0) && (file !== basename);
    })
    .forEach(function (file) {
        if (file.slice(-3) !== '.js') return;
        var model = sequelize['import'](path.join(__dirname, file));
        db[model.name] = model;
    });

console.log(db);
    
Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});



(async () => {
    await sequelize.sync();
})();
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
// db.users = require("./user.model.js")(sequelize, Sequelize);
// console.log(db);
module.exports = db;
