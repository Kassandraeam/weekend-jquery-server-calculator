const express = require('express');
const app = express();
const PORT = 5000;

userInputsObject = [];

app.use(express.static('server/public'));

app.get('/userInputs', (req, res)=>{
    console.log('GET /userInputs')
    console.log('(1) Right now I have accessed the app.get')
    // console.log(userInputsObject)
    res.send(userInputsObject)
})

app.post('/userInputs', (req, res)=>{
    console.log('POST /userInputs');
    console.log('(2) Right now I have accessed the app.post')
    // console.log(`req body`, req.body);
    userInputsObject.push(req.body)
    res.sendStatus(200);
})

app.listen(PORT, function() {
    console.log('listening on port', PORT)
});