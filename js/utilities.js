// common shared function is here

// console.log('utility page is clicked')

// function getInputFieldValueById() {
//     console.log('will get the value by id')
//     const addMoney = document.getElementById('input-add-money').value;
//     return addMoney;
// }

function getInputFieldValueById(id) {
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    console.log('add money value', id, inputValue, inputNumber)
    return inputNumber;
}

function getTextFieldValueById(id) {
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}


function showSectionById(id) {
    document.getElementById('add-money-form').classList.add('hidden')
    document.getElementById('cash-out-form').classList.add('hidden')
    document.getElementById('transaction-section').classList.add('hidden')
    document.getElementById(id).classList.remove('hidden')
}