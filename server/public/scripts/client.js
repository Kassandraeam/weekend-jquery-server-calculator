$(document).ready(onReady);

function onReady(){
    $('#submit').on('click', addInputs)
    getInputs();
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
            <li>${input.inputOne}</li>
            <li>${input.inputTwo}</li>
        `)
    }
    // for (let input of userInputs){
    //     $('thingsGoHere').append(`
    //     <li>${input.inputOne}</li>
    //     <li>${input.inputTwo}</li>
    //     `)
    // }
}

//s