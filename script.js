let allset = document.getElementsByClassName('set');
const setamaound = document.getElementById("40set");
const setDecriment = document.getElementById("setDecriment");


for(const set of allset){
    set.addEventListener('click', function(event){
        set.style.backgroundColor = "green";
        const clsss = "Economoy" ;
        const setPrice = 550;
        const setNumber = event.target.innerText ;
               
        const incrimentSet = getConbertValue('incrimentSet');
        document.getElementById('incrimentSet').innerText = incrimentSet - 1 ;

        const setcout = getConbertValue('setDecriment') ;
        document.getElementById('setDecriment').innerText = setcout +1 ;
       
        const firstcarcoundt = getConbertValue("setDecriment");
        if(firstcarcoundt + 1 > 4){
            alert('set ar nai ');
            return;
        }
        const settectedContainer = document.getElementById('show');

        const div = document.getElementById('div');      
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        const p3 = document.createElement('p');
        p1.innerText = setNumber ;
        p2.innerText = clsss;
        p3.innerText =  setPrice; 

        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);
        updetatotlecost(setPrice);
        updetatgrandcost();
        
    })

};
function updetatgrandcost(status){
    const totalecost = document.getElementById("total-cost").innerText;
    const convarttotalcost = parseInt(totalecost);
    
    if(status==undefined){
        document.getElementById('grand-cost').innerText = convarttotalcost;

    }else{
        const coponcode = document.getElementById('coponcord').value;

        if(coponcode === "NEW15"){
            const discounted = convarttotalcost * 0.15 ;
            document.getElementById('grand-cost').innerText = convarttotalcost - discounted;
        }else if (coponcode=== "Couple 20"){
            const discounted = convarttotalcost * 0.2 ;
            document.getElementById('grand-cost').innerText = convarttotalcost - discounted;
        }
        else{
            alert('Plesa enter valid coupon code')
        }
    }

}

function updetatotlecost(value){
    const totalecosrt = document.getElementById('total-cost').innerText;
    const convert = parseInt(totalecosrt)
    
    const convertValue = parseInt(value) ; 

    const sum = convert + convertValue ;

    document.getElementById('total-cost').innerText = sum;
}



function getConbertValue(id){
    const price = document.getElementById(id).innerText;
    const convertPrice = parseInt(price);
    return convertPrice;
}
