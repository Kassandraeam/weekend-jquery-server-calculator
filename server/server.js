const express = require('express');
const app = express();
const PORT = 5000;
let result;
let objectKeyOne;
let objectKeyTwo;
let objectKeyThree;

userInputsObject = [];

app.use(express.urlencoded({extended:true}));
app.use(express.static('server/public'));

app.get('/userInputs', (req, res)=>{
    console.log('GET /userInputs')
    console.log('(1) Right now I have accessed the app.get')
    testHello();
    res.send(userInputsObject);
})


app.post('/userInputs', (req, res)=>{

    userInputsObject.push(req.body)
    res.sendStatus(200);
    console.log('POST /userInputs');
    console.log('(2) Right now I have accessed the app.post')
    objectTotal = userInputsObject[0];
    objectKeyOne = Number(userInputsObject[0]['inputOne']);
    objectKeyTwo = Number(userInputsObject[0]['inputTwo']);
    objectKeyThree = (userInputsObject[0]['operation']);
    calculator()
    console.log('RESULT:', result);

})


function calculator(){

for (let result of userInputsObject) {
    switch (objectKeyThree){
        case '+':
            result = objectKeyOne + objectKeyTwo;
            return result;
            break;
        case '-':
            result = objectKeyOne - objectKeyTwo;
            return result;
            break;
        case '*':
            result = objectKeyOne * objectKeyTwo;
            return result;
            break;
        case '/':
            result = objectKeyOne / objectKeyTwo;
            return result;
            break;
        default:
            console.log('need an operator');
            break;
    };
};
    userInputsObject['result'] = result;
    userInputsObject.push(result);
    console.log('this should be the result:', userInputsObject.result);
};

app.listen(PORT, function() {
    console.log('listening on port', PORT)
});

function testHello(){
    console.log(`hello`);
    // console.log('should have results:', userInputsObject);
    // console.log('hello: LOOK HERE:', objectKeyOne, objectKeyTwo, objectKeyThree);
     // got inputOne, inputTwo, and operation successfully
}