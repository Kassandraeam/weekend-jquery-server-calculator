const express = require('express');
const app = express();
const PORT = 5000;

userInputsObject = [];

app.use(express.urlencoded({extended:true}));
app.use(express.static('server/public'));

app.get('/userInputs', (req, res)=>{
    console.log('GET /userInputs')
    console.log('(1) Right now I have accessed the app.get')
    // console.log(userInputsObject)
    res.send(userInputsObject);
})

//add 3 input, add numbers and operation to array.

app.post('/userInputs', (req, res)=>{
    console.log('POST /userInputs');
    console.log('(2) Right now I have accessed the app.post')
    testHello();
    // console.log(`req body`, req.body);
    userInputsObject.push(req.body)
    res.sendStatus(200);
})

app.listen(PORT, function() {
    console.log('listening on port', PORT)
});

//I need calculations/logic on this side, and I need to push it back to the client.

/*
    When the user selects the + button, it needs to 
*/

function testHello(){
    console.log('Hello');
}

// let operators = {
//     '+': (inputOne, inputTwo) => inputOne + inputTwo,
//     '-': (inputOne, inputTwo) => inputOne - inputTwo,
//     '*': (inputOne, inputTwo) => inputOne * inputTwo,
//     '/': (inputOne, inputTwo) => inputOne / inputTwo
// };

// client needs to send something here, server know what they selected, perform 

//function here

//equal button add 
// hold 3 parameters on server
// perform function on server
// return to client 

// you're sending the operation that you run by clicking that specific button
// click +, input 1 + input 2 = output.
// click -, input 1 - input 2 = output.



// 1) Add operation to array in getInputs()
// 2) make function with all three inputs
// 3) Server sends back data (completed operation) that is added to getInputs();

// just send back + sign as a string 
// Then we figure run an if conditional if string contains operation, run that math operation.

// if operation id === + run something.
