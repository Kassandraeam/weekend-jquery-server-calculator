$(document).ready(onReady);
let userInputsOperation;
function onReady(){
    getInputs();
    $('#submit').on('click', addInputs)
    $('#clearUserInputs').on('click', clearInputs)

    $('#add, #subtract, #multiply, #division').on('click', function() {
        if (this.id == 'add') {
            console.log('ADD IT!');
            userInputsOperation = '+'
        } else if (this.id == 'subtract') {
            console.log('SUBTRACT IT!');
            userInputsOperation = '-';
        } else if (this.id == 'multiply') {
            console.log('MULTIPLY IT!'); 
            userInputsOperation =  '*';
        } else if (this.id == 'divide') {
            console.log('DIVIDE IT!')
            userInputsOperation =  '/';
        }
    })

};

function addInputs(){
    console.log('Clicked.');
    let userInputs = {
    inputOne: $('#inputOne').val(),
    inputTwo: $('#inputTwo').val(),
    operation: userInputsOperation,
    }
    console.log('addinputs checking user inputs here:',userInputs);
    // console.log(`userinputs plz have operation: ${userInputs.inputOne}, ${userInputs.inputTwo}, ${userInputs.operation}`)
    $.ajax({
        method: 'POST',
        url: '/userInputs',
        data: userInputs,
    }).then(function(response){
        // console.log(response);
        console.log('response in the addinputs function',response);
        getInputs();
    })
}

function getInputs(){
    $.ajax({
        method: 'GET',
        url: '/userInputs'
    }).then(function(response){
        // userInputs.result = response[1];
        console.log('response in the getInputs function',response);
        renderToDom(response);
    })
    console.log('end of getInputs');
}

function renderToDom(userInputs){
    $('#output').empty();
    console.log('userinputs in dom:', userInputs);
    userInputs = Object.values(userInputs);
    for (let input of userInputs){
        //maybe another for of loop in here, but only to get 
        $('#output').append(`
            <li>${input.inputOne} ${input.operation} ${input.inputTwo} = ${userInputs[userInputs.length - 1]} </li>
        `)
    }
}

function clearInputs(){
    $('#inputOne').val('');
    $('#inputTwo').val('');
}
