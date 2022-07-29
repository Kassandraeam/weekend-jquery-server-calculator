const express = require('express');
const app = express();
const PORT = 5000;

app.listen(PORT, () => {
    console.log('listening on port', PORT)
});

app.use(express.static('server/public'));