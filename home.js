//  logout button event 

document.getElementById('logout-btn').addEventListener('click', function(){
    window.location.href = '/'
})

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
    document.getElementById('latest-payment-parent').style.display = 'none';
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
    if(addAmount <= 0){
        alert("Please Input valid number");
        return;
    }
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


     let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

    // transcation data
    const data = {
        name: "Add Money",
        date: new Date().toLocaleTimeString()
    }


    transactions.push(data)

   localStorage.setItem('transactions', JSON.stringify(transactions))


})





// withdraw money section =================

document.querySelector('#withdraw-btn').addEventListener('click', function(event){
    event.preventDefault();

     // get the avaiable balance
    const avaiableBalance = getAvailableBalance()
    // withdraw fileds
    const agentNumber = getValuesInNumber('agent-number')

    const cashOutAmount = getValuesInNumber('cashout-amount')
    if(cashOutAmount <= 0 || cashOutAmount > avaiableBalance){
        alert('Pleae input a valid amount');
        return;
    }

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


     let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

    // transcation data
    const data = {
        name: "WithDraw Money",
        date: new Date().toLocaleTimeString()
    }

    transactions.push(data)

    // transactionData.push(data)
    localStorage.setItem('transactions', JSON.stringify(transactions))
   


    
})



// transaction section ======

document.getElementById('transaction-toggle').addEventListener('click', function(){
    const transactionContainer = document.getElementById('transaction-container')
    transactionContainer.innerText = '';

    let transactions = JSON.parse(localStorage.getItem("transactions"));
    // console.log(transactions )


    for(const data of transactions){
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="flex justify-between items-center bg-white p-3 rounded-xl mb-4">
                <div class="flex justify-between items-center">
                    <div class="flex items-center ">
                        <div class="bg-gray-200 rounded-full p-2 me-3">
                            <img class="mx-auto" src="./assets/purse1.png" alt="">
                        </div>
                    <div>
                        <h3 class="font-semibold">${data.name}</h3>
                        <p>${data.date}</p>
                    </div>
                    </div>
                </div>
                <div>
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                </div>
             </div>
        `
        transactionContainer.appendChild(div)
    }
})


// latest payment section ========
 
 let transactions = JSON.parse(localStorage.getItem("transactions"));
    // console.log(transactions)    
 let latestTransactions = transactions.reverse();

  
    for(let data of latestTransactions){
      
        const latestPaymentContainer = document.getElementById('latest-payment-container');
        const div =  document.createElement('div');
        div.innerHTML = `
            <div class="flex justify-between items-center bg-white p-3 rounded-xl mb-4">
                <div class="flex justify-between items-center">
                    <div class="flex items-center ">
                        <div class="bg-gray-200 rounded-full p-2 me-3">
                            <img class="mx-auto" src="./assets/purse1.png" alt="">
                        </div>
                    <div>
                        <h3 class="font-semibold">${data.name}</h3>
                        <p>${data.date}</p>
                    </div>
                    </div>
                </div>
                <div>
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                </div>
             </div>
        `
        latestPaymentContainer.appendChild(div)
        
        
    }



    









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