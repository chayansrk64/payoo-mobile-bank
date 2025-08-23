// add event listener to the Add Money

document.querySelector('#add-money-btn').addEventListener('click', function(event){
    event.preventDefault();
    
    // get input field value
    const bank = document.querySelector('#add-bank').value;
    const bankAccountNumber = document.querySelector('#add-bank-account').value;
    const addAmount = parseInt(document.querySelector('#add-amount').value);
    const addPin = document.querySelector('#add-pin').value;

    // get the avaiable balance
    const avaiableBalance = parseInt(document.querySelector('#available-balance').textContent)

    // sum available balance 
    const total = avaiableBalance + addAmount;
    
    // update available balance
    document.querySelector('#available-balance').textContent = total;

   


})