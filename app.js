const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Halaman Utama');
});

app.get('/about', (req, res) => {
    res.send('Halaman Tentang Kami');
});

app.get('/contact', (req, res) => {
    res.send('Hubungi Kami di routing-app')
});

app.listen(3000, () => console.log('Server Berjalan di http://localhost:3000'));

app.get('/produk/:kode', (req,res ) => {
    res.send(`Halaman Produk dengan Kode: ` + req.params.kode);
});

app.post('/users', (req, res) => {
    res.send('Tambah Data User Baru');
});

app.put('/users/:id', (req, res) => {
    res.send(`Update Data User dengan ID: ${req.params.id}`);
});

app.delete('/users/:id', (req, res) => {
    res.send(`Hapus Data User dengan ID: ${req.params.id}`);
});