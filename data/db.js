const sqlite3 = require('sqlite3').verbose();
const Anayemekler = require('../model/anayemekler');
const Icecekler = require('../model/icecekler')

const db = new sqlite3.Database('Menu5.db');

db.serialize(() => {
    db.run ('CREATE TABLE IF NOT EXISTS anayemekler (id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT NO NULL, price REAL NO NULL, description TEXT NO NULL, imageUrl TEXT, isHome BOOLEAN DEFAULT 1, isActive BOOLEAN DEFAULT 1)');

    db.run ('CREATE TABLE IF NOT EXISTS icecekler ( id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NO NULL, price REAL NO NULL, description TEXT NO NULL, imageUrl TEXT, isHome BOOLEAN DEFAULT 1, isActive BOOLEAN DEFAULT 1)');

});

module.exports = db;