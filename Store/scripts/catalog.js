// var serverURL = "https://restclass.azurewebsites.net/API/";
var items = [];

function fetchCatalog(){

    /* $.ajax({
        url: serverURL + "points",
        type: "GET",
        success: function(response){
            console.log("response", response);

            for(var i=0; i < response.length; i++){
                var item = response[i];
                if(item.code == "Gabe"){
                    items.push(item);
                    
                }
    
            }


            //solve, show only MY items
            //travel response array
            //get each item on the array
            // if the item.user == "Gabe"
            // then, push item into items array
        },
        error: function(errorDetails){
            console.log("Error:", errorDetails);
        }
    }); */

     items = [

         {
            "code" : "SRD01",
            "description" : "Small straight sword excelling in thrusting attacks. The shortsword is a light and easily wielded straight sword, due to its minimal attribute requirements.",
            "price" : 99,
            "image" : "images/Shortsword.png",
            "category" : "Swords",
            "stock" : 5,
            "delivery" : 14
        },
        {
            "code" : "SPR01",
            "description" : "Common short spear that allows attacking with shield up. Spear attacks are centered on thrusting and are deadliest from a distance.",
            "price" : 120,
            "image" : "images/Spear.png",
            "category" : "Spears",
            "stock" : 3,
            "delivery" : 18
        },
        {
            "code" : "HAM01",
            "description" : "Iron hammer designed for use in battle. A common weapon for clerics. This bladeless strike weapon is effective against most foes, and can break the guard of a shield.",
            "price" : 119,
            "image" : "images/Mace.png",
            "category" : "Hammers",
            "stock" : 12,
            "delivery" : 7
        },
        {
            "code" : "BOW01",
            "description" : "Longbow commonly used by hunters. Arrows must be equipped in order to use bows. Up to two kinds of arrow can be equipped at a time, and these can be switched as necessary.",
            "price" : 190,
            "image" : "images/Longbow.png",
            "category" : "Bows",
            "stock" : 5,
            "delivery" : 14
        },
        {
            "code" : "AXE01",
            "description" : "Easily-wielded axe crafted for battle and inflicting standard damage. It's weight can be used to inflict high damage, but must be used carefully as it leaves its wielder open to retaliation.",
            "price" : 109,
            "image" : "images/Battle_Axe.png",
            "category" : "Axes",
            "stock" : 16,
            "delivery" : 9
        },
        {
            "code" : "STF01",
            "description" : "Staff used to cast sorceries. A common catalyst given to sorcerers of the Vinheim Dragon School. Equip a catalyst to use sorceries. Sorceries must be tuned at a bonfire before use.",
            "price" : 1499,
            "image" : "images/Sorcerers_Staff.png",
            "category" : "Staves",
            "stock" : 1,
            "delivery" : 365
        }
    ];
}

function displayCatalog(){
    // travel the array
    for(var i=0; i < items.length; i++){
        // get the item
        var item = items[i];
        // draw the item on the DOM (html)
        drawItem(item);
    }
}

function drawItem(item){
    //  create the sintax
    var sntx = 
    `<div class='item'> 
        <img class="itemImage" src='${item.image}'>

        <label class="itemCode">${item.code}</label>
        <label class="itemCategory">${item.category}</label>

        <label class="itemDescription">${item.description}</label> 

        <label class="itemPrice">${item.price}</label>
        <button class='btn btn-sm btn-indo' id="addToCart"> Add To Cart </button>
        
        <br>

        <label class="itemStock">${item.stock} Left in Stock</label>

        <br>
        
        <label class="itemDelivery">${item.delivery}-Day Delivery</label>
    </div>`;

    // get the element from the screen
    var container = $("#catalog");

    // append the sintac to the element
    container.append(sntx);
}

function search() {

    // get the text
    var text = $("#txtSearch").val().toLowerCase();

    // clear previous results
    $("#catalog").html("");

    //travel array and show only items that contain the text
    for(var i=0; i< items.length; i++){
        var item = items[i];
        //if the description contains the text, or catefory, or code, or price, etc...
        // if title contains the text, then show the item on the screen
        if (item.description.toLowerCase().includes(text)
            || item.category.toLowerCase().includes(text)
            || item.code.toLowerCase().includes(text)
            || item.price.toLowerCase().includes(text)
            ){
                drawItem(item);
            }
    }
}

/* 
function testAjax() {
    $.ajax({
        url: serverURL + "test",
        type: 'GET',
        success: function (res) {
            console.log("Server says", res)
        },
        error: function (err) {
            console.log("Error ocurred", err)
        }
    });
} */




function init(){
    console.log("This is the catalog page!");

    // get data
    fetchCatalog();
    displayCatalog();

    // hook events
    $("#btnSearch").click(search);
    $("#txtSearch").keypress(function(e){
        // console.log(e);

        if(e.keyCode == 13){
            search();
        }
    });

    $("#catalog").on("click", ".item", function(){
        
        $(this).toggleClass("selected");
    })
}


window.onload = init;