// login button event
document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();
    
    const moblileNumber = 12345678910;
    const pinNumber = 1234;

    const numberInput = document.getElementById('mobile-number').value;
    const numberInputConverted = parseInt(numberInput);

    const pinInput = document.getElementById('pin-number').value;
    const pinInputConverted = parseInt(pinInput);
    
    if(moblileNumber === numberInputConverted && pinNumber === pinInputConverted){
        window.location.href = './home.html'
    }else{
        alert('Invalid Credentials')
    }


})

