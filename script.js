// -----index------
function filterBtn() {
    var sideBar = document.getElementById('sideBar');
    sideBar.style.marginLeft = "0px"
}

function filterBarClose() {
    sideBar.style.marginLeft = "-250px"
}
// to change the price on what region the user selects--------
function change() {
    var select = document.getElementById('select');
    var dollar = 280;
    var myprice = document.querySelectorAll('.my-price');
    var rupee = document.querySelectorAll('.rupee');
    var euro = 305;
    var riyal = 75;

    if (select.value == "USA") {

        myprice.forEach(dollarprice => {

            var price1 = dollarprice.innerHTML;
            var dprice = price1 / dollar;
            dollarprice.innerHTML = dprice.toFixed(2);

            rupee.forEach(eachrupee => {
                eachrupee.innerHTML = "$ "
            });
        });
    }
    else if (select.value == "EU") {

        myprice.forEach(dollarprice => {

            var price1 = dollarprice.innerHTML;
            var dprice = price1 * dollar;
            dollarprice.innerHTML = dprice.toFixed(2);

            rupee.forEach(eachrupee => {
                eachrupee.innerHTML = "Rs "
            });
        });

        myprice.forEach(dollarprice => {

            var price1 = dollarprice.innerHTML;
            var eprice = price1 / euro;
            dollarprice.innerHTML = eprice.toFixed(2);

            rupee.forEach(eachrupee => {
                eachrupee.innerHTML = "Eu "
            });
        });
    }
    else if(select.value == "GULF") {

        myprice.forEach(dollarprice => {

            var price1 = dollarprice.innerHTML;
            var eprice = price1 * euro;
            dollarprice.innerHTML = eprice.toFixed(2);

            rupee.forEach(eachrupee => {
                eachrupee.innerHTML = ""
            });
        });

        myprice.forEach(dollarprice => {

            var price1 = dollarprice.innerHTML;
            var gprice = price1 / riyal;
            dollarprice.innerHTML = gprice.toFixed(2);

            rupee.forEach(eachrupee => {
                eachrupee.innerHTML = "SR "
            });
            });
    }
};
// to change the price on what region the user selects--------

// to filter out products by searching through the searc bar--------
$(document).ready(function () {

    $("#inputField").on("keyup", function () {
        var value = $(this).val().toLowerCase();

        $(".product").filter(function () {

            $(this).toggle($(this).text().toLowerCase().
                indexOf(value) > -1)
        });
    });
});
// to filter out products by searching through the searc bar--------

// ------index----

// ------for single product image change----
$(document).ready(function(){
    $('#img').click(function(){
        $('#mainimg').attr("src","images/seagate1.jfif")
    })
})
$(document).ready(function(){
    $('#1img').click(function(){
        $('#mainimg').attr("src","images/seagate2.jfif")
    })
})
$(document).ready(function(){
    $('#2img').click(function(){
        $('#mainimg').attr("src","images/seagate3.jfif")
    })
})
$(document).ready(function(){
    $('#3img').click(function(){
        $('#mainimg').attr("src","images/hard drive1.jpg")
    })
})
// ------for single product image change----
// customer review scripting------
var review = document.querySelector('.customer-review .row');
var dropdownName = document.getElementById('dropdown-name');
var dropdownPara = document.getElementById('dropdown-para');

    function reviewBtn(e) {
            if(dropdownName.value == "" || dropdownPara.value == "") {
                    e.prevaneDefault();           
            }
        var newCol = document.createElement('div');
        review.appendChild(newCol);
        newCol.classList.add('col-md-4','card');
        var chead = document.createElement('div');
        newCol.appendChild(chead);
        chead.classList.add('card-header', 'bg-color', 'h3');
        chead.innerHTML = dropdownName.value;
        var cimg = document.createElement('img');
        cimg.style.width = "50px";
        cimg.src = "images/avatar.webp"
        chead.appendChild(cimg);
        var cbody = document.createElement('div');
        newCol.appendChild(cbody);
        cbody.classList.add('card-body');
        cbody.innerHTML = dropdownPara.value;

        dropdownName.value = ""
        dropdownPara.value = ""
    }
// customer review------





 
        

        