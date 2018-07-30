const fruits = [{ category: "fruits", name: "apple", mrp: "60", qty: 0 },
{ category: "fruits", name: "mango", mrp: "30", qty: 0 },
{ category: "fruits", name: "guava", mrp: '50', qty: 0 },
{ category: "fruits", name: "watermelon", mrp: '40', qty: 0 },
{ category: "fruits", name: "apricot", mrp: '60', qty: 0 },
{ category: "fruits", name: "blackberry", mrp: '50', qty: 0 },
{ category: "fruits", name: "blueberry", mrp: '60', qty: 0 },
{ category: "fruits", name: "cherry", mrp: '90', qty: 0 },
{ category: "fruits", name: "grapes", mrp: '60', qty: 0 },
{ category: "fruits", name: "orange", mrp: '50', qty: 0 }]
const vegetable = [{ category: "vegetable", name: "pumpkin", mrp: '30', qty: 0 },
{ category: "vegetable", name: "ladyfinger", mrp: '40', qty: 0 },
{ category: "vegetable", name: "potato", mrp: '20', qty: 0 },
{ category: "vegetable", name: "tomato", mrp: '30', qty: 0 },
{ category: "vegetable", name: "sweet potato", mrp: '40', qty: 0 },
{ category: "vegetable", name: "corn", mrp: '20', qty: 0 },
{ category: "vegetable", name: "cauliflower", mrp: '30', qty: 0 },
{ category: "vegetable", name: "pea", mrp: '30', qty: 0 },
{ category: "vegetable", name: "onion", mrp: '30', qty: 0 },
{ category: "vegetable", name: "green bean", mrp: '30', qty: 0 }]
const biscuit = [{ category: "biscuits", name: "parle g", mrp: '10', qty: 0 },
{ category: "biscuits", name: "krack jack", mrp: '20', qty: 0 },
{ category: "biscuits", name: "hide & seek", mrp: '30', qty: 0 },
{ category: "biscuits", name: "nimkin", mrp: '10', qty: 0 },
{ category: "biscuits", name: "magix", mrp: '30', qty: 0 },
{ category: "biscuits", name: "parle shakti", mrp: '0', qty: 0 },
{ category: "biscuits", name: "happy happy", mrp: '20', qty: 0 },
{ category: "biscuits", name: "coconut cookies", mrp: '10', qty: 0 }]
const drink = [{ category: "drink", name: "limca", mrp: '30', qty: 0 },
{ category: "drink", name: "fanta", mrp: '30', qty: 0 },
{ category: "drink", name: "miranda", mrp: '30', qty: 0 },
{ category: "drink", name: "slice", mrp: '30', qty: 0 },
{ category: "drink", name: "pepsi", mrp: '30', qty: 0 },
{ category: "drink", name: "dew", mrp: '30', qty: 0 },
{ category: "drink", name: "redbull", mrp: '30', qty: 0 }]

//it is used to locate the position of qty
function call(name, pos, newVal) {
    if (name == "fruits") {
        fruits[pos].qty = newVal;

    } else if (name == "vegetable") {
        vegetable[pos].qty = newVal;

    } else if (name == "biscuit") {

        biscuit[pos].qty = newVal;

    } else if (name == "drink") {
        drink[pos].qty = newVal;

    }
}
//html is for table for categories.
var html = "<tr><th>Category</th><th>Name</th><th>MRP</th><th>Quantity</th></tr>";
var checkout = "<tr><th>name</th><th>quantity</th></tr>";
//checkoutArray is used to store the element which we want to push for checkout.
var checkoutArray = [];

function searchItems() {

    sr = document.getElementById("search").value;
    var a = new RegExp(sr, "g");
    for (var i = 0; i < fruits.length; i++) {

        var s = document.getElementById("search").value.toLowerCase;
        if (fruits[i].name.includes(sr) | fruits[i].category.includes(sr) | fruits[i].mrp.includes(sr)) {


            html = html + "<tr><td>" + fruits[i].category + "</td><td>" + fruits[i].name + "</td><td>" + fruits[i].mrp + "</td><td><input  type='number' id=qty" + fruits[i].qty + " value=0 min=0 max=10 onchange=call('fruits'," + i + ",this.value)></td></tr>";

        }

        document.getElementById("carttable").innerHTML = html;



    }
    for (var i = 0; i < vegetable.length; i++) {

        var s = document.getElementById("search").value.toLowerCase;
        if (vegetable[i].name.includes(sr) | vegetable[i].category.includes(sr) | vegetable[i].mrp.includes(sr)) {


            html = html + "<tr><td>" + vegetable[i].category + "</td><td>" + vegetable[i].name + "</td><td>" + vegetable[i].mrp + "</td><td><input  type='number' id=qty" + vegetable[i].qty + " value=0 min=0 max=10 onchange=call('vegetable'," + i + ",this.value)></td></tr>";

        }

        document.getElementById("carttable").innerHTML = html;



    }


    for (var i = 0; i < biscuit.length; i++) {

        var s = document.getElementById("search").value.toLowerCase;
        if (biscuit[i].name.includes(sr) | biscuit[i].category.includes(sr) | biscuit[i].mrp.includes(sr)) {


            html = html + "<tr><td>" + biscuit[i].category + "</td><td>" + biscuit[i].name + "</td><td>" + biscuit[i].mrp + "</td><td><input  type='number' id=qty" + biscuit[i].qty + " value=0 min=0 max=10 onchange=call('biscuit'," + i + ",this.value)></td></tr>";

        }

        document.getElementById("carttable").innerHTML = html;



    }

    for (var i = 0; i < drink.length; i++) {

        var s = document.getElementById("search").value.toLowerCase;
        if (drink[i].name.includes(sr) | drink[i].category.includes(sr) | drink[i].mrp.includes(sr)) {


            html = html + "<tr><td>" + drink[i].category + "</td><td>" + drink[i].name + "</td><td>" + drink[i].mrp + "</td><td><input  type='number' id=qty" + drink[i].qty + " value=0 min=0 max=10 onchange=call('drink'," + i + ",this.value)></td></tr>";

        }

        document.getElementById("carttable").innerHTML = html;



    }

}
//This function is used to clear all items	 
var clearItems = () => {
    in_name = document.getElementById("search").value;
    var a = new RegExp(in_name, "g");
    var html = "<tr><th id='category' >Category</th><th>Name</th><th>Mrp</th><th>Quantity</th></tr>";
    document.getElementById("carttable").innerHTML = " ";
}
//This function is used to add to cart
function addCart() {
    var cart = "<tr><th>Name</th><th>Quantity</th><th>Mrp</th></tr>";
    for (var i = 0; i < fruits.length; i++) {

        var qty = fruits[i].qty;
        if (qty > 0) {
            cart = cart + "<tr><td>" + fruits[i].name + "</td><td>" + fruits[i].qty + "</td><td>" + fruits[i].mrp + "</td></tr>";

            checkoutArray.push({ category: "fruits", name: fruits[i].name, mrp: fruits[i].mrp, qty: fruits[i].qty });
        }

    }
    for (var i = 0; i < vegetable.length; i++) {

        var qty = vegetable[i].qty;
        if (qty > 0) {
            cart = cart + "<tr><td>" + vegetable[i].name + "</td><td>" + vegetable[i].qty + "</td><td>" + vegetable[i].mrp + "</td></tr>";
            checkoutArray.push({ category: "vegetable", name: vegetable[i].name, mrp: vegetable[i].mrp, qty: vegetable[i].qty });
        }

    }
    for (var i = 0; i < biscuit.length; i++) {

        var qty = biscuit[i].qty;
        if (qty > 0) {
            cart = cart + "<tr><td>" + biscuit[i].name + "</td><td>" + biscuit[i].qty + "</td><td>" + biscuit[i].mrp + "</tr>";
            checkoutArray.push({ category: "biscuit", name: biscuit[i].name, mrp: biscuit[i].mrp, qty: biscuit[i].qty });
        }

    }
    for (var i = 0; i < drink.length; i++) {

        var qty = drink[i].qty;
        if (qty > 0) {
            cart = cart + "<tr><td>" + drink[i].name + "</td><td>" + drink[i].qty + "</td><td>" + drink[i].mrp + "</td></tr>";
            checkoutArray.push({ category: "drink", name: drink[i].name, mrp: drink[i].mrp, qty: drink[i].qty });
        }

    }
    document.getElementById("finalcart").innerHTML = cart;

}

//this is used to checkout items.
function checkoutItems() {
    sum=0;
    //window.location.href="totalBill.html"
    var total = "<tr><th>Name</th><th>Quantity</th><th>Mrp</th><th>Total</th></tr>";
    for (var i = 0; i < fruits.length; i++) {

        var qty = fruits[i].qty;
        if (qty > 0) {
            var mrp = fruits[i].mrp;
            var t = mrp * qty;
            console.log(t);
            total = total + "<tr><td>" + fruits[i].name + "</td><td>" + fruits[i].qty + "</td><td>" + fruits[i].mrp + "</td><td>" + t + "</tr>";
            console.log("total");
            document.getElementById("bill").innerHTML = total;

        }
    }
    for (var i = 0; i < vegetable.length; i++) {

        var qty = vegetable[i].qty;
        if (qty > 0) {
            var mrp = fruits[i].mrp;
            var m = mrp * qty;
            console.log(m);
            total = total + "<tr><td>" + vegetable[i].name + "</td><td>" + vegetable[i].qty + "</td><td>" + vegetable[i].mrp + "</td><td>" + m + "</tr>";
            console.log("total");
            document.getElementById("bill").innerHTML = total;
        }
    }
    for (var i = 0; i < biscuit.length; i++) {

        var qty = biscuit[i].qty;
        if (qty > 0) {
            var mrp = biscuit[i].mrp;
            var x = mrp * qty;
            console.log(x);
            total = total + "<tr><td>" + biscuit[i].name + "</td><td>" + biscuit[i].qty + "</td><td>" + biscuit[i].mrp + "</td><td>" + x + "</tr>";
            console.log("total");
            document.getElementById("bill").innerHTML = total;
        }
    }
    for (var i = 0; i < drink.length; i++) {

        var qty = drink[i].qty;
        if (qty > 0) {
            var mrp = drink[i].mrp;
            var y = mrp * qty;
            console.log(y);
            total = total + "<tr><td>" + drink[i].name + "</td><td>" + drink[i].qty + "</td><td>" + drink
            [i].mrp + "</td><td>" + y + "</tr>";
            console.log("total");
            
            

            document.getElementById("bill").innerHTML = total;
        }
        
    }
}
localStorage.setItem('total', 'x');
