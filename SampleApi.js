const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();

app.use(express.json());
app.use(cors());

const data = "Sutha Mudittu Po da Thayoli !!!    - Praveen Narayanan";

app.get('/app/data', (req, res) => {

    // IP address capture
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const userAgent = req.headers['user-agent'];

    console.log("IP:", ip);
    console.log("Device:", userAgent);
    console.log("Time:", new Date().toISOString());
    console.log("--------------------------------");

    // Optional: save into file
    const log = `IP: ${ip} | Time: ${new Date().toISOString()} | Device: ${userAgent}\n`;
    fs.appendFileSync('logs.txt', log);

    res.json(data);
});

const PORT = process.env.PORT || 7001;

app.listen(PORT, () => {
    console.log(`Successfully running on port ${PORT}`);
});
