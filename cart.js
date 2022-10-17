let counter = 0;
let t_p = 0;
let dc = 0;
let sc = 0;

function addtocart(price)
{
    counter++;
    document.getElementById('total-products').innerText = counter;
    t_p += price;
    document.getElementById('price').innerText = t_p.toFixed(2);
    delCharge(t_p);
    detTax(t_p);  
    document.getElementById('total').innerText = t_p.toFixed(2);
}

function delCharge(dprice)
{
    if(dprice>=1000){
        dc = 200;
    }

    else if(price>=800){
        dc = 150;
    }

    else if(dprice>=500){
        dc = 100;
    }

    document.getElementById('delivery-charge').innerText = dc.toFixed(2);
    shipCharge(dprice);
    t_p += dc;
}

function shipCharge(sprice)
{
    if(sprice>=1000){
        sc = 200;
    }

    else if(sprice>=800){
        sc = 150;
    }

    else if(sprice>=500){
        sc = 100;
    }
    document.getElementById('shipping-charge').innerText = sc.toFixed(2);
    t_p += sc;
}

function detTax(price)
{
    per = (price*15)/100;
    document.getElementById('tax').innerText = per.toFixed(2);
    t_p += per; 
}

const orderProducts=()=>
{
    alert("Thank You\nTotal Price: "+ t_p);
}

const responce=()=>
{
    alert("Mail Sent");
}