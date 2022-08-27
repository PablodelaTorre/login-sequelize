require('dotenv').config()

module.exports = {
    // Config DB

    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST || "127.0.0.1", 
    dialect: process.env.DB_DIALECT,

    // Config Seeds
    seederStorage: "sequelize",
    seederStorageTableName : "seeds",

    // Config Migrations
    migrationStorage: "sequelize",
    migrationStorageTableName: "migrations"

}