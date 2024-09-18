const toggler = document.getElementById("switch");


toggler.addEventListener("click", function() {
    // console.log(toggler.checked);

    if (toggler.checked === true)
    {
        document.body.style.backgroundColor = "black";
    }

    else 
    {
        document.body.style.backgroundColor = "white";
    }

});