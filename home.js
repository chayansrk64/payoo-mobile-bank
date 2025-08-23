// add event listener to the Add Money

// pin number
const pinNumber = 1234;

document.querySelector('#add-money-btn').addEventListener('click', function(event){
    event.preventDefault();
    
    // get input field value
    const bank = document.querySelector('#add-bank').value;
    const bankAccountNumber = document.querySelector('#add-bank-account').value;
    const addAmount = parseInt(document.querySelector('#add-amount').value);
    const addPin = parseInt(document.querySelector('#add-pin').value);

    // get the avaiable balance
    const avaiableBalance = parseInt(document.querySelector('#available-balance').textContent)

    // sum available balance 
    if(bankAccountNumber.length < 11){
        alert("Please input 11 digit Bank Account Number!")
        return;
    }
    if(addPin !== pinNumber){
        alert("Please input valid Pin Number!")
        return;
    }
    const total = avaiableBalance + addAmount;
    
    // update available balance
    document.querySelector('#available-balance').textContent = total;
    // notification
    alert('Balance Updated Succesfully!')
   


})





// withdraw money section =================

document.querySelector('#withdraw-btn').addEventListener('click', function(event){
    event.preventDefault();

     // get the avaiable balance
    const avaiableBalance = parseInt(document.querySelector('#available-balance').textContent)
    // withdraw fileds
    const agentNumber = document.querySelector('#agent-number').value;
    const cashOutAmount = parseInt(document.querySelector('#cashout-amount').value);
    const cashOutPin = parseInt(document.querySelector('#cashout-pin').value);

    // validation pin
    if(pinNumber !== cashOutPin){
        alert("Pin Number didn't match");
        return;
    }
    // subtract balance
    const newBalance = avaiableBalance - cashOutAmount;
    // new balance
    document.querySelector('#available-balance').textContent = newBalance;

    // notification
    alert("Cash out successful!")


    
})







// toggling with add money and cashout =========

document.getElementById('add-money-toggle').addEventListener('click', function() {

    // toggle style addmoney and cashout button
    document.getElementById('add-money-toggle').style.border = '2px solid red';
    document.getElementById('cash-out-toggle').style.border = '2px solid grey';

    // toggle style for the addmoney and cashout
    document.getElementById('cash-out-parent').style.display = 'none';
    document.getElementById('add-money-parent').style.display = 'block';
     
})

document.getElementById('cash-out-toggle').addEventListener('click', function(){

    // toggle style addmoney and cashout button
    document.getElementById('cash-out-toggle').style.border = '2px solid red';
    document.getElementById('add-money-toggle').style.border = '2px solid grey';

    // toggle style for the addmoney and cashout
    document.getElementById('add-money-parent').style.display = 'none';
    document.getElementById('cash-out-parent').style.display = 'block';
})