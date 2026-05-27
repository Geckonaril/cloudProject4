const express = require('express');
const app = express();
const port = 80;

// Sahte E-Ticaret Ürün Veritabanı
const products = [
    { id: 1, name: "Oyuncu Klavyesi", price: 1500, stock: 45 },
    { id: 2, name: "Kablosuz Mouse", price: 800, stock: 120 },
    { id: 3, name: "24 inç Monitör", price: 4500, stock: 15 }
];

// Ana Sayfa - Sistem Durumu
app.get('/', (req, res) => {
    res.send(`<h1>E-Ticaret API Çalışıyor!</h1><p>Hizmet veren sunucu IP adresi: Bulutta dinamik olarak atanacak</p>`);
});

// Ürünleri Listeleme API'si
app.get('/api/products', (req, res) => {
    res.json(products);
});

// AUTO SCALING TETİKLEYİCİ (STRES TESTİ)
// Bu adrese girildiğinde CPU'yu kasıtlı olarak %100'e çıkarır
app.get('/stress', (req, res) => {
    res.send("<h1>Stres testi başlatıldı! CPU %100'e zorlanıyor... AWS Auto Scaling birazdan devreye girecek!</h1>");
    
    // CPU'yu yoran sonsuz/ağır döngü
    let i = 0;
    while (i < 10000000000) {
        i++;
    }
});

app.listen(port, () => {
    console.log(`E-ticaret uygulaması port ${port} üzerinde çalışıyor.`);
});