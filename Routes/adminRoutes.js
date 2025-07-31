const express = require('express')
const router = express.Router();
const adminController = require('../controller/adminController');

router.get('/',adminController.getPanel);

// Yeni Ekle
router.post('/anayemek-ekle', adminController.postAnayemekEkle);
router.post('/icecek-ekle',adminController.postIceceklerEkle);


// Silme
router.post('/anayemek-sil', adminController.postAnayemekSil);
router.post('/icecek-sil', adminController.postIceceklerSil);


// Güncelleme
router.post('/anayemek/:id/guncelle', adminController.postAnayemekGuncelle);
router.post('/icecek/:id/guncelle', adminController.postIceceklerGuncelle);


module.exports = router;
