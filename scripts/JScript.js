//Shopping Cart JS
document.addEventListener('DOMContentLoaded', function () 
{
    //Default values for each item
    var breadPrice = 0.95;
    var eggPrice = 2.10;
    var milkPrice = 1.30;
    var beanPrice = 0.73;
    
    /***********************************************************************/
    //CurrencyLayer API
    //Create a request variable and assign a new XMLHttpRequest object to it
    const request = new XMLHttpRequest();
    const url = 'http://www.apilayer.net/api/live?access_key=bc3fc1c0627569d45ccce484f924c862&format=1';

    //Open a new connection, using the GET request and make it async
    request.open("GET", url, true);
    request.send();

    request.onreadystatechange = function()
    {
        if (this.readyState === 4 && this.status === 200)
        {
            //Test i'm pulling in the correct data from CurrencyLayer
            console.log(request.responseText);
        }
    }
    /***********************************************************************/

    /* Currency convertor with dropdown */
    $.ajax({
    url: 'http://www.apilayer.net/api/live?access_key=bc3fc1c0627569d45ccce484f924c862&format=1',   
    dataType: 'json',
    success: function(json) {
    if (json.success == true) 
    {
        var select = document.getElementById('currency_code');
        var itemTotal = document.getElementsByClassName('currency');

        var GBP = "GBP";
        var USD = "USD";

        select.onclick = function()
        {
            var opts = select.options;
            for (var opts, j = 0; opt = opts[j]; j++)
            {
                if (opt.value == GBP)
                {
                    if (itemTotal) 
                    {
                        var itemTotal = parseFloat(itemTotal).toFixed(2);
                        var to_GBP = itemTotal*json.quotes.USDGBP;
                        itemTotal.text.innerHTML=to_GBP.toFixed(2);
                    }
                }
                else if (opt.value == USD)
                {
                    if (itemTotal) 
                    {
                        var itemTotal = parseFloat(itemTotal).toFixed(2);
                        var to_USD = itemTotal*json.quotes.USDUSD;
                        itemTotal.text.innerHTML=to_USD.toFixed(2);
                    }
                }
            }
        }
        }
    }
    });
    /***********************************************************************/

    //Shopping cart logic
    /***********************************************************************/
    /*
    Tried to use a more efficient way but was unable to get what I wanted
    Was lacking time and began to get nowehere so jumped to a horrible solution
    A ton of restructuring/organising and encapsulation is required

    The amount of repetition is unbelievable.

    var btnId = document.getElementsByClassName('plus-btn');
    for (i = 0; i < btnId.length; i++)
    {
        btnId[i].addEventListener('click', plusQuantity);
    }

    var btnId = document.getElementsByClassName('minus-btn');
    for (i = 0; i < btnId.length; i++)
    {
        btnId[i].addEventListener("click", minusQuantity);
    }
    */

    //Works, but not very managable in code
    document.getElementById('plus1').addEventListener('click', function()
    {
        plusQuantity1();
    });  
    document.getElementById('plus2').addEventListener('click', function()
    {
        plusQuantity2();
    }); 
    document.getElementById('plus3').addEventListener('click', function()
    {
        plusQuantity3();
    }); 
    document.getElementById('plus4').addEventListener('click', function()
    {
        plusQuantity4();
    }); 


    /* Minus the quantity */
    document.getElementById('minus1').addEventListener('click', function()
    {
        minusQuantity1();
    }); 
    document.getElementById('minus2').addEventListener('click', function()
    {
        minusQuantity2();
    }); 
    document.getElementById('minus3').addEventListener('click', function()
    {
        minusQuantity3();
    }); 
    document.getElementById('minus4').addEventListener('click', function()
    {
        minusQuantity4();
    }); 

    /* Quantity 1*/
    function plusQuantity1() 
    {

        var value = parseFloat(document.getElementById('name1').value, 10);
        value = isNaN(value) ? 0 : value;
        value++;
        document.getElementById('name1').value = value;

        updateItemTotalIncrease1();
        updateGrandTotal();
    }

    /* Quantity 1*/
    function minusQuantity1() 
    {
        var value = parseFloat(document.getElementById('name1').value, 10);
        value = isNaN(value) ? 0 : value;
        value < 1 ? value = 1 : '';
        value--;
        document.getElementById('name1').value = value;

        updateItemTotalDecrease1();
        updateGrandTotal();
    }

    /* Quantity 2*/
    function plusQuantity2() 
    {

        var value = parseFloat(document.getElementById('name2').value, 10);
        value = isNaN(value) ? 0 : value;
        value++;
        document.getElementById('name2').value = value;

        updateItemTotalIncrease2();
        updateGrandTotal();
    }

    /* Quantity 2*/
    function minusQuantity2() 
    {
        var value = parseFloat(document.getElementById('name2').value, 10);
        value = isNaN(value) ? 0 : value;
        value < 1 ? value = 1 : '';
        value--;
        document.getElementById('name2').value = value;

        updateItemTotalDecrease2();
        updateGrandTotal();
    }

    /* Quantity 3*/
    function plusQuantity3() 
    {

        var value = parseFloat(document.getElementById('name3').value, 10);
        value = isNaN(value) ? 0 : value;
        value++;
        document.getElementById('name3').value = value;

        updateItemTotalIncrease3();
        updateGrandTotal();
    }

    /* Quantity 3*/
    function minusQuantity3() 
    {
        var value = parseFloat(document.getElementById('name3').value, 10);
        value = isNaN(value) ? 0 : value;
        value < 1 ? value = 1 : '';
        value--;
        document.getElementById('name3').value = value;

        updateItemTotalDecrease3();
        updateGrandTotal();
    }

    /* Quantity 4*/
    function plusQuantity4() 
    {

        var value = parseFloat(document.getElementById('name4').value, 10);
        value = isNaN(value) ? 0 : value;
        value++;
        document.getElementById('name4').value = value;

        updateItemTotalIncrease4();
        updateGrandTotal();
    }

    /* Quantity 4*/
    function minusQuantity4() 
    {
        var value = parseFloat(document.getElementById('name4').value, 10);
        value = isNaN(value) ? 0 : value;
        value < 1 ? value = 1 : '';
        value--;
        document.getElementById('name4').value = value;

        updateItemTotalDecrease4();
        updateGrandTotal();
    }

    /***********************************************************************/

    /* ITEM 1*/
    function updateItemTotalIncrease1()
    {
        var quantity = parseFloat(document.getElementById('name1').value);
        var itemPrice = breadPrice * quantity;

        document.getElementById('total-price1').innerHTML = itemPrice.toFixed(2);
    }

     /* ITEM 1*/
    function updateItemTotalDecrease1()
    {
        var quantity = parseFloat(document.getElementById('name1').value);
        var itemPrice = breadPrice * quantity;

        document.getElementById('total-price1').innerHTML = itemPrice.toFixed(2);
    }

     /* ITEM 2*/
    function updateItemTotalIncrease2()
    {
        var quantity = parseFloat(document.getElementById('name2').value);
        var itemPrice = eggPrice * quantity;

        document.getElementById('total-price2').innerHTML = itemPrice.toFixed(2);
    }

     /* ITEM 2*/
    function updateItemTotalDecrease2()
    {
        var quantity = parseFloat(document.getElementById('name2').value);
        var itemPrice = eggPrice * quantity;

        document.getElementById('total-price2').innerHTML = itemPrice.toFixed(2);
    }

     /* ITEM 3*/
    function updateItemTotalIncrease3()
    {
        var quantity = parseFloat(document.getElementById('name3').value);
        var itemPrice = milkPrice * quantity;

        document.getElementById('total-price3').innerHTML = itemPrice.toFixed(2);
    }

     /* ITEM 3*/
    function updateItemTotalDecrease3()
    {
        var quantity = parseFloat(document.getElementById('name3').value);
        var itemPrice = milkPrice * quantity;

        document.getElementById('total-price3').innerHTML = itemPrice.toFixed(2);
    }

     /* ITEM 4*/
    function updateItemTotalIncrease4()
    {
        var quantity = parseFloat(document.getElementById('name4').value);
        var itemPrice = beanPrice * quantity;

        document.getElementById('total-price4').innerHTML = itemPrice.toFixed(2);
    }

     /* ITEM 4*/
    function updateItemTotalDecrease4()
    {
        var quantity = parseFloat(document.getElementById('name4').value);
        var itemPrice = beanPrice * quantity;

        document.getElementById('total-price4').innerHTML = itemPrice.toFixed(2);
    }

    /***********************************************************************/

    function updateGrandTotal()
    {
        var totals = document.getElementsByName("total");
        var sum = 0;

        for (var i = 0; i < totals.length; i++)
        {
            sum += parseFloat(totals[i].textContent);
        }
        document.getElementById('grand-total').innerHTML = "£" + sum.toFixed(2);
        console.log(sum);
    }
    /***********************************************************************/
});

   