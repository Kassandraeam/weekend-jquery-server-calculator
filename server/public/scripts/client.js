$(document).ready(onReady);

objectContainingUserInputs = {
    userInputOne: [],
    userInputTwo: [],
    userOperation: [],
}

objectUserHistory = {
    userInputOneHistory: [],
    userInputTwoHistory: [],
    userOperation: []
}

function onReady(){
    $('#submit').on('click', captureInputs)

    $('#add').on('click', addition)
    $('#subtract').on('click', subtraction)
    $('#multiply').on('click', multiplication)
    $('#divide').on('click', division)
    // $('.collection').on('click', '#add, #subtract, #multiply, #divide', getOperation)
};

function captureInputs(){
    // console.log('Captured Inputs'); // successfully clicked button.
    let inputOne = parseInt($('#inputOne').val());
    let inputTwo = parseInt($('#inputTwo').val());
    objectContainingUserInputs.userInputOne = [];
    objectContainingUserInputs.userInputTwo = [];
    objectContainingUserInputs.userInputOne.push(inputOne);
    objectContainingUserInputs.userInputTwo.push(inputTwo);

    objectUserHistory.userInputOneHistory.push(inputOne);
    objectUserHistory.userInputTwoHistory.push(inputTwo);
    // if statement that says if I select this operation, set it equal to operationChosen.
}

function addition(){
    objectContainingUserInputs.userOperation = [];
    console.log('addition');
    objectContainingUserInputs.userOperation.push('+')
    return;
}
function subtraction(){
    objectContainingUserInputs.userOperation = [];
    console.log('subtraction');
    objectContainingUserInputs.userOperation.push('-')
    return;
}
function multiplication(){
    objectContainingUserInputs.userOperation = [];
    console.log('multiplication');
    objectContainingUserInputs.userOperation.push('*')
    return;

}
function division(){
    objectContainingUserInputs.userOperation = [];
    console.log('division');
    objectContainingUserInputs.userOperation.push('/')
    return;
}


//user will input1, select operation, then input2, then all of that needs to be captured.

//function that says if this button is clicked, variable is equal to true?

// function getOperation(){
    
// }