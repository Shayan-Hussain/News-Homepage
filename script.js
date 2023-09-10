
let nav = document.querySelector("nav");
let nav_list = document.querySelector(".nav_list");
let nav_list_string = 
        `<ul class="nav_list">
            <li><a class="list_item_ahcr">Home</a></li>
            <li><a class="list_item_ahcr">New</a></li>
            <li><a class="list_item_ahcr">Trending</a></li>
            <li><a class="list_item_ahcr">Popular</a></li>
            <li><a class="list_item_ahcr">Catagories</a></li>
        </ul>`
let ham_img = `<img src="/assets/icon-menu.svg" alt="menu" class="ham_burger_icon" onclick="show_menu()">`
let screen_minized = false;

function list_ham_changer() {
    if (window.innerWidth < 380 && !screen_minized) {
        if (nav_list)   {
            nav_list.remove();
            nav.innerHTML += ham_img;
            screen_minized = true;
        }
    } else {
        if (!nav_list) {
        nav.innerHTML += ham_img;
        nav.innerHTML += nav_list_string;
        }
    }
}

list_ham_changer();

$(window).resize(function() {
    list_ham_changer();
});

let open = false;

function show_menu() {

    if (open === false) {

        nav.innerHTML = "";
        nav.style = "flex-direction: column;";

        let mobile_logo_cross =
        `<div class="mobile_logo_cross" style="margin: 10px 0;">
        <a class="logo_ahcr"><img src="/assets/logo.svg" alt="W." class="logo"></a>
        <img src="/assets/icon-menu-close.svg" alt="menu" class="ham_burger_icon" onclick="show_menu()">
        </div>`

        let mobile_nav = 
        `<div class="mobile_nav">
            <a class="ham_list border_top">Home</a>
            <a class="ham_list">New</a>
            <a class="ham_list">Trending</a>
            <a class="ham_list">Popular</a>
            <a class="ham_list">Catagories</a>
        </div>`

        nav.innerHTML += mobile_logo_cross;
        nav.innerHTML += mobile_nav;
        open = true;
        return;
    }   else    {
        nav.style = "flex-direction: flex-end;";
        let mobile_nav  = document.querySelector(".mobile_nav");
        mobile_nav.remove();
        open = false;
        return;
    }

}