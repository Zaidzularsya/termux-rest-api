const express = require('express');
const { exec } = require('child_process');

const app = express();

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="id">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Status Layanan</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    text-align: center;
                    background-color: #f4f4f4;
                    padding: 20px;
                }
                .container {
                    background: white;
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
                    display: inline-block;
                }
                .status {
                    color: red;
                    font-size: 24px;
                    font-weight: bold;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Status Layanan Internet</h1>
                <p class="status">Layanan Anda Ditangguhkan</p>
                <p>Alasan: Belum melakukan pembayaran</p>
                <p>Silakan hubungi admin: 0896-5614-4397</p>
            </div>
        </body>
        </html>
    `);
});


app.get('/notify', (req, res) => {
    const msg = req.query.msg || 'Notifikasi dari Termux';
    exec(`termux-notification --title "Notifikasi" --content "${msg}"`);
    res.send({ status: 'Notification Sent', message: msg });
});

app.get('/tts', (req, res) => {
    const msg = req.query.msg || 'Halo dari Termux';
    exec(`termux-tts-speak "${msg}"`);
    res.send({ status: 'Speaking', message: msg });
});

app.listen(3000, () => console.log('Server running on port 3000'));
