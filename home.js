// add event listener to the Add Money

// pin number
const pinNumber = 1234;

// ============== reusable functions =============

// reusable function for values
function getValuesInNumber(id){
    return parseInt(document.getElementById(id).value);
}

// reusable for avaiable balance
function getAvailableBalance(){
    return parseInt(document.querySelector('#available-balance').innerText);
}

// reusable function to set innerText
function setInnerText(value){
    return document.getElementById('available-balance').innerText = value;
}

// toggle form function
function toggleForm(id){
    const forms = document.getElementsByClassName('form');
    for(const form of forms){
        form.style.display = 'none'
    }
    document.getElementById(id).style.display = 'block';
}

// toggle button styles
function toggleBtnStyles(id){
    const allBtns = document.getElementsByClassName('toggle-style');
    for(const btn of allBtns){
        btn.classList.remove("border-[#0874f2]", "bg-[#0874F20d]", "text-[#0874f2]")
        btn.classList.add("border-grey-500")
    }
    document.getElementById(id).classList.remove("border-grey-500")
    document.getElementById(id).classList.add("border-[#0874f2]", "bg-[#0874F20d]", "text-[#0874f2]")
}





// add money section ========

document.querySelector('#add-money-btn').addEventListener('click', function(event){
    event.preventDefault();
    
    // get input field value
    const bank = document.querySelector('#add-bank').value;
    const bankAccountNumber = getValuesInNumber('add-bank-account')
    const addAmount = getValuesInNumber('add-amount');
    const addPin = getValuesInNumber('add-pin')

    // get the avaiable balance
    const avaiableBalance = getAvailableBalance()

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
    setInnerText(total)

    // notification
    alert('Balance Updated Succesfully!')
   


})





// withdraw money section =================

document.querySelector('#withdraw-btn').addEventListener('click', function(event){
    event.preventDefault();

     // get the avaiable balance
    const avaiableBalance = getAvailableBalance()
    // withdraw fileds
    const agentNumber = getValuesInNumber('agent-number')

    const cashOutAmount = getValuesInNumber('cashout-amount')

    const cashOutPin = getValuesInNumber('cashout-pin')

    // validation pin
    if(pinNumber !== cashOutPin){
        alert("Pin Number didn't match");
        return;
    }
    // subtract balance
    const newBalance = avaiableBalance - cashOutAmount;

    // new balance
    setInnerText(newBalance);

    // notification
    alert("Cash out successful!")


    
})





// toggling with add money =========

document.getElementById('add-money-toggle').addEventListener('click', function() {

    // const forms = document.getElementsByClassName('form');
    // for(const form of forms){
    //     form.style.display = 'none'
    // }
    // document.getElementById('add-money-parent').style.display = 'block';

    toggleForm('add-money-parent')     


    // button toggle style
    // const allBtns = document.getElementsByClassName('toggle-style');
    
    // for(const btn of allBtns){
    //     btn.classList.remove("border-[#0874f2]", "bg-[#0874F20d]", "text-[#0874f2]")
    //     btn.classList.add("border-grey-500")
    // }
    // document.getElementById('add-money-toggle').classList.remove("border-grey-500")
    // document.getElementById('add-money-toggle').classList.add("border-[#0874f2]", "bg-[#0874F20d]", "text-[#0874f2]")

    toggleBtnStyles('add-money-toggle')



})

// toggling with cash out =========

document.getElementById('cash-out-toggle').addEventListener('click', function(){
   
    toggleForm('cash-out-parent')
    
    toggleBtnStyles('cash-out-toggle')

})

// toggleing with transfer money ==========

document.getElementById('transfer-toggle').addEventListener('click', function(){

     toggleForm('transfer-parent')

     toggleBtnStyles('transfer-toggle')

})

// get bonus
document.getElementById('bonus-toggle').addEventListener('click', function(){

     toggleForm('bonus-parent')

     toggleBtnStyles('bonus-toggle')

})
// add money
document.getElementById('pay-bill-toggle').addEventListener('click', function(){

     toggleForm('pay-bill-parent')

     toggleBtnStyles('pay-bill-toggle')

})
// transactions
document.getElementById('transaction-toggle').addEventListener('click', function(){

     toggleForm('transaction-parent')

     toggleBtnStyles('transaction-toggle')

})