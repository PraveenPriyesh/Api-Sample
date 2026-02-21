const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const data = [{
    "Sutha Mudittu Po da Thayoli !!!"
}];

app.get('/app/data', (req, res) => {
    res.json(data);
});

const PORT = process.env.PORT || 7001;

app.listen(PORT, () => {
    console.log(`Successfully running on port ${PORT}`);
});
