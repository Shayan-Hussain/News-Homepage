
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
let ham_img = `<img src="/assets/icon-menu.svg" alt="menu" class="ham_burger_icon">`
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

function show_menu() {
    let mobile_nav = 
    `<div class="mobile_nav">
        <a class="ham_list">Home</a>
        <a class="ham_list">New</a>
        <a class="ham_list">Trending</a>
        <a class="ham_list">Popular</a>
        <a class="ham_list">Catagories</a>
    </div>`

    nav.innerHTML += mobile_nav;
    
}