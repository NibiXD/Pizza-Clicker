let currency = 0;
let currencyGain = 1;
let up1AtualVal = 0;
let totalClickGain = 0;

//Variaveis de controle do Click Upgrade 1 -----

let c1CostBase = 20;
let c1CostNext = c1CostBase;
let c1RateGrowth = 2.21;
let c1Owned = 0;
//let c1ProductBase = 0.20;
//let c1ProductionTotal = 0;
let totalC1 = 0;

//------------------------------------

//Variaveis de controle do Pizzaiolo -----

let u1CostBase = 50;
let u1CostNext = u1CostBase;
let u1RateGrowth = 1.20;
let u1Owned = 0;
let u1ProductBase = 0.20;
let u1ProductionTotal = 0;
let totalForno = 0;

//------------------------------------

//Variaveis de controle do Atendente -----

let u2CostBase = 1340;
let u2CostNext = u2CostBase;
let u2RateGrowth = 1.27;
let u2Owned = 0;
let u2ProductBase = 3;
let u2ProductionTotal = 0;
let totalAtendentes = 0;

//------------------------------------

//Variaveis de controle do Garçom -----

let u3CostBase = 12400;
let u3CostNext = u1CostBase;
let u3RateGrowth = 1.29;
let u3Owned = 0;
let u3ProductBase = 27.80;
let u3ProductionTotal = 0;
let totalGarcom = 0;

//------------------------------------

let currencyT = 0;
let valor = document.getElementById('currency');

//-----------------------------------------------------------------------FIM VARIAVEIS---------------------------------------------------------------------------

function AttCurrency() {

    let valor = document.getElementById('currency');

    currency += currencyGain;
    valor.innerHTML = "Pizzas: " + currency.toFixed(0);

}

function Upgrade1() {

    let valor = document.getElementById('currency');
    let c1Next = document.getElementById('c1Next');
    let c1Qt =  document.getElementById('c1Qt')
    let up1ClickVal = document.getElementById('c1ClickVal');

    if (currency >= c1CostNext) {

        c1Owned += 1
        currency -= c1CostNext;
        valor.innerHTML = "Pizzas: " + currency.toFixed(0);
        c1CostNext = Math.round(c1CostBase * Math.pow(c1RateGrowth, c1Owned));
        if (c1Owned %10 == 0) {
            up1AtualVal += 2;
            currencyGain += 2;
        } else {
            up1AtualVal += 1;
            currencyGain += 1;
        }

        
    }

    c1Next.innerHTML = c1CostNext + " Pizzas"
    c1Qt.innerHTML = "x" + c1Owned;
    up1ClickVal.innerHTML = "+" + up1AtualVal;
    
}

function Forno() {

    let valor = document.getElementById('currency');
    let fornoNext = document.getElementById('fornoNext');
    let fornoQt = document.getElementById('fornoQt');
    let fornoProd = document.getElementById('fornoProd');


    if (currency >= Math.round(u1CostNext)) {
        u1Owned++;
        currency -= u1CostNext;
        u1CostNext = Math.round(u1CostBase * Math.pow(u1RateGrowth, u1Owned));
        u1ProductionTotal = u1ProductBase * u1Owned;

        totalForno++;
    }

    fornoNext.innerHTML = u1CostNext.toFixed(0) + " Pizzas";
    fornoQt.innerHTML = "x" + totalForno;
    fornoProd.innerHTML = u1ProductionTotal.toFixed(2) + "/s"
    valor.innerHTML = "Pizzas: " + currency.toFixed(0);

}

function Atendente() {

    let valor = document.getElementById('currency');
    let atendenteNext = document.getElementById('atendenteNext');
    let atendenteQt = document.getElementById('atendenteQt');
    let atendenteProd = document.getElementById('atendenteProd');


    if (currency >= Math.round(u2CostNext)) {
        u2Owned++;
        currency -= u2CostNext;
        u2CostNext = Math.round(u2CostBase * Math.pow(u2RateGrowth, u2Owned));
        u2ProductionTotal = u2ProductBase * u2Owned;

        totalAtendentes++;
    }

    atendenteNext.innerHTML = u2CostNext.toFixed(0) + " Pizzas";
    atendenteQt.innerHTML = "x" + totalAtendentes;
    atendenteProd.innerHTML = u2ProductionTotal.toFixed(2) + "/s"
    valor.innerHTML = "Pizzas: " + currency.toFixed(0);

}

function Garcom() {

    let valor = document.getElementById('currency');
    let garcomNext = document.getElementById('garcomNext');
    let garcomQt = document.getElementById('garcomQt');
    let garcomProd = document.getElementById('garcomProd');


    if (currency >= Math.round(u3CostNext)) {
        u3Owned++;
        currency -= u3CostNext;
        u3CostNext = Math.round(u3CostBase * Math.pow(u3RateGrowth, u3Owned));
        u3ProductionTotal = u3ProductBase * u3Owned;

        totalGarcom++;
    }

    garcomNext.innerHTML = u3CostNext.toFixed(0) + " Pizzas";
    garcomQt.innerHTML = "x" + totalGarcom;
    garcomProd.innerHTML = u3ProductionTotal.toFixed(2) + "/s"
    valor.innerHTML = "Pizzas: " + currency.toFixed(0);

}

setInterval(function() {

    let valor = document.getElementById('currency');
    let titulo = document.getElementById('titulo');
    currencyT = u1ProductionTotal + u2ProductionTotal + u3ProductionTotal;
    currency += currencyT;
    valor.innerHTML = "Pizzas: " + currency.toFixed(0);
    titulo.innerHTML = currency.toFixed(0) + " Pizzas - " + "Pizza Clicker"

}, 1000);
