const db = require('../data/db');

exports.renderHome = (req,res) => {
    db.all('SELECT * FROM anayemekler', (err, anayemekler) => {
        if (err) return res.status(500).send('Veri Tabanı Hatası (anayemekler)');

    db.all('SELECT * FROM icecekler', (err2,icecekler) => {
        if(err2) return res.status(500).send('Veri Tabanı Hatası (icecekler)');

        res.render('index', { anayemekler, icecekler });
    });
    });
};