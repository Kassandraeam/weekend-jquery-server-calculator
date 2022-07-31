$(document).ready(onReady);

function onReady(){
    getInputs();
    $('#submit').on('click', addInputs)
    $('#clearUserInputs').on('click', clearInputs)

    $('#add').on('click', addNumbers)
    /*
    When this button is pushed, I need to send something over to the Server, and then the server needs to handle that information. 

    function addNumbers(){
    $.ajax({
        method: 'POST' // this will add NEW data.
        url: '/calculations',
        data: add
    })
    }
    */
    // $('#subtract').on('click', subtractNumbers)
    // $('#multiply').on('click', multiplyNumbers)
    // $('#divide').on('click', divideNumbers)
};

function addInputs(){
    console.log('Clicked.');
    let userInputs = {
    inputOne: $('#inputOne').val(),
    inputTwo: $('#inputTwo').val()
    }
    $.ajax({
        method: 'POST',
        url: '/userInputs',
        data: userInputs,
    }).then(function(response){
        console.log(response);
        getInputs();
    })
}

function getInputs(){
    $.ajax({
        method: 'GET',
        url: '/userInputs'
    }).then(function(response){
        console.log(response);
        renderToDom(response);
    })
    console.log('end of getInputs');
}

function renderToDom(userInputs){
    $('#output').empty();
    for (let input of userInputs){
        $('#output').append(`
            <li>${input.inputOne} ${input.inputTwo}</li>
        `)
    }
}

function clearInputs(){
    $('#inputOne').val('');
    $('#inputTwo').val('');
}

// get requests should ONLY ever retrieve data.
// should NEVER modify data.

// post requests are meant to MODIFY data.
//Create new resource

/*
$(document).ready(onReady);
userInputs = [];
operationArray = [];
function onReady(){
    getInputs();
    $('#submit').on('click', addInputs)
    $('#clearUserInputs').on('click', clearInputs)
    // if add button is clicked,function that says mathOperation = '+', userInputs.push(mathOperation)

    // $('#add').on('click', addNumbers);
    // $('#subtract').on('click', subtractNumbers);
    // $('#multiply').on('click', multiplyNumbers);
    // $('#division').on('click', divideNumbers);

    $('#add, #subtract, #multiply, #division').on('click', operation())
};
// call big function that has 4 functions inside.
// if THIS button was clicked, do this thing.
function operation(){
    if (this.id == 'add') {
        console.log('ADD IT!');
        // operationArray.operation = '+';
        // console.log(`${operationArray}`)
    } else if (this.id == 'subtract') {
        console.log('SUBTRACT IT!');
        // console.log(`${operationArray}`)
        // operationArray.operation = '-';
    } else if (this.id == 'multiply') {
        console.log('MULTIPLY IT!'); 
        // operationArray.operation = '*';
        // console.log(`${operationArray}`)
    } else if (this.id == 'divide') {
        console.log('DIVIDE IT!')
        // operationArray.operation = '/';
        // console.log(`${operationArray}`)
    }
};

function addInputs(){
    console.log('Clicked.');
    let userInputs = {
    inputOne: $('#inputOne').val(),
    inputTwo: $('#inputTwo').val(),
    }
    $.ajax({
        method: 'POST',
        url: '/userInputs',
        data: userInputs, 
    }).then(function(response){
        console.log(response);
        getInputs();
    })
}

// function addNumbers(){
//     userInputs.operation = '+';
//     console.log(userInputs.operation)
// };
// function subtractNumbers(){
//     userInputs.operation = '-';
//     console.log(userInputs.operation)
// };
// function multiplyNumbers(){
//     userInputs.operation = '*';
//     console.log(userInputs.operation)
// };
// function divideNumbers(){
//     userInputs.operation = '/';
//     console.log(userInputs.operation)
// };

function getInputs(){
    $.ajax({
        method: 'GET',
        url: '/userInputs'
    }).then(function(response){
        console.log(response);
        renderToDom(response);
    })
    console.log('end of getInputs');
}

function renderToDom(userInputs){
    $('#output').empty();
    for (let input of userInputs){
        $('#output').append(`
            <li>${input.inputOne} ${input.inputTwo}</li>
        `)
    }
}

function clearInputs(){
    $('#inputOne').val('');
    $('#inputTwo').val('');
}

// get requests should ONLY ever retrieve data.
// should NEVER modify data.

// post requests are meant to MODIFY data.
//Create new resource
*/