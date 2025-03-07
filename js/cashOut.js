// console.log('cash out file added')
document.getElementById('btn-cash-out').addEventListener('click', function (event) {
    event.preventDefault();
    const cashOut = getInputFieldValueById('input-cash-out')
    const pinNumber = getInputFieldValueById('input-cash-out-pin')
    if (pinNumber === 1234) {
        const balance = getTextFieldValueById('account-balance')
        const newBalance = balance - cashOut;
        document.getElementById('account-balance').innerText = newBalance;
        // add to transaction history
        const div = document.createElement('div');
        div.classList.add('bg-yellow-300');
        div.innerHTML = `
    
          <h4 class="text-2xl font-bold">Cash out</h4>
          <p>${cashOut}:withdraw. New Balance:${newBalance}</p>
        `;
        console.log(div)
        document.getElementById('transaction-container').appendChild(div);
        // console.log(div)
    }
    else {
        alert('Failed cash out.Please try again.')
    }
})