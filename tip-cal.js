window.onload = () =>{
    document.querySelector('#cal').onclick = calculateTip;
}

function calculateTip(){
    let amount = document.querySelector('#amount').value;
    let services = document.querySelector('#services').value;
    let persons = document.querySelector('#persons').value;

    console.log(services);
    if(amount === '' && services === 'Select'){
        alert("Plese enter valid values");
        return;
    }

    if(persons === '1'){
        document.querySelector('#each').style.display = 'none';
    }else{
        document.querySelector('#each').style.display = 'block';
    }
    let total = (amount * services)/ persons;
    console.log(total);
    total = Math.round(total * 100)/100;
    total =total.toFixed(2);
    console.log(total);

    document.querySelector('.cal-tip').style.display = 'block';
    document.querySelector('#total').innerHTML = total;
    
}