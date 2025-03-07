document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();
    console.log('add money button clicked')

    // getInputFieldValueById();
    // const addMoney = getInputFieldValueById();
    // console.log('add money', addMoney)
    // // const addMoney=document.getElementById('input-add-money').value
    // const addMoneyNumber=parseFloat(addMoney);
    // const pinNumber=document.getElementById('pin-number').value

    const addMoney = getInputFieldValueById('input-add-money');
    const pinNumber = getInputFieldValueById('pin-number');
    console.log('add money with parameter', addMoney, pinNumber)

    if (pinNumber === 1234) {
        const balance = getTextFieldValueById('account-balance');
        const newBalance = balance + addMoney
        console.log(balance, addMoney)
        document.getElementById('account-balance').innerText = newBalance;
        // add to transaction history
        const p = document.createElement('p')
        p.innerText = `Added:${addMoney}tk. New Balance:${newBalance}`;
        console.log(p)
        document.getElementById('transaction-container').appendChild(p)
    }
    else {
        alert('Failed to add money')
    }

})