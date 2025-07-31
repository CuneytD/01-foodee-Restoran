const db = require('../data/db');


exports.getPanel = (req,res) => {
    db.all('SELECT * FROM anayemekler', (err,anayemekler) => {
        if(err) return res.status(500).send('Anayemek Verisi Alınamadı');

    db.all('SELECT * FROM icecekler',(err2, icecekler)=> {
        if(err2) return res.status(500).send('İcecekler Verisi Alınamadı');

        res.render('product-kontrol', {anayemekler, icecekler} );
    });
    });
};


// -----  Anayemek Ekle  -----
exports.postAnayemekEkle= (req,res) => {
    const {name, price, description, imageUrl, isHome, isActive } = req.body;

    if(!name || !name.trim()) {
        return res.status(500).send('Ad alanı zorunludur');
    }

    if (!price || isNaN(price) || Number(price) <= 0 ) {
        return res.status(500).send('Geçerli Bir Fiyat Giriniz(Sadece Sayı).');
        }

    db.run('INSERT INTO anayemekler (name, price, description, imageUrl, isHome, isActive)VALUES (?, ?, ?, ?, ?, ?)',
    [name, price, description, imageUrl, isHome, isActive],
    function (err) {
        if(err) {
            console.error(err);
            return res.status(500).send('Kayıt Eklenirken Hata Oluştu');
            }
        return res.redirect('/product-kontrol');
        }
    );
};

// ----------Anayemek Sil --------

exports.postAnayemekSil = (req,res) => {
    const {id} = req.params;

    db.run('DELETE  FROM anayemekler WHERE id= ?', [id],
        function(err) {
            if(err) {
                return res.status(500).send('Silme Sırasında Hata Oluştu.');
            }
            res.redirect('/product-kontrol');
    });   
};


// -----------Anayemek Güncelle---------

exports.postAnayemekGuncelle = (req,res) =>{
    const { id } = req.params;
    const {name, price, description, imageUrl, isHome, isActive } = req.body;

    db.run('UPDATE anayemekler SET name = ?, price = ?, description = ?, imageUrl = ?, isHome = ?, isActive = ? WHERE id = ?', [name, price, description, imageUrl, isHome, isActive, id],
        function (err) {
            if(err) {
                return res.status(500).send('Günceleme Sırasında Hata Oluştu')                
            }
            res.redirect('/product-kontrol');
        }
     );
};







// -----  İcecekler  Ekle  -----
exports.postIceceklerEkle = (req,res) => {
    const {name, price, description, imageUrl, isHome, isActive } = req.body;

    if(!name || !name.trim()) {
        return res.status(500).send('Ad alanı zorunludur');
    }

    if (!price || isNaN(price) || Number(price) <= 0 ) {
        return res.status(500).send('Geçerli Bir Fiyat Giriniz(Sadece Sayı).');
        }

    db.run('INSERT INTO icecekler (name, price, description, imageUrl, isHome, isActive)VALUES (?, ?, ?, ?, ?, ?)',
    [name, price, description, imageUrl, isHome, isActive],
    function (err) {
        if(err) {
            console.error(err);
            return res.status(500).send('Kayıt Eklenirken Hata Oluştu');
            }
        return res.redirect('/product-kontrol');
        }
    );
};

// ----------icecekler  Sil --------

exports.postIceceklerSil = (req,res) => {
    const {id} = req.params;

    db.run('DELETE  FROM icecekler WHERE id= ?', [id],
        function(err) {
            if(err) {
                return res.status(500).send('Silme Sırasında Hata Oluştu.');
            }
            res.redirect('/product-kontrol');
    });   
};


// -----------iceckeler  Güncelle---------

exports.postIceceklerGuncelle = (req,res) =>{
    const { id } = req.params;
    const {name, price, description, imageUrl, isHome, isActive } = req.body;

    db.run('UPDATE icecekler SET name = ?, price = ?, description = ?, imageUrl = ?, isHome = ?, isActive = ? WHERE id = ?', [name, price, description, imageUrl, isHome, isActive, id],
        function (err) {
            if(err) {
                return res.status(500).send('Günceleme Sırasında Hata Oluştu')                
            }
            res.redirect('/product-kontrol');
        }
     );
};



