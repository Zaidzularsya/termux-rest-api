const express = require('express');
const { exec } = require('child_process');

const app = express();
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
