
let nav = document.querySelector("nav");
let nav_list = document.querySelector(".nav_list");
let nav_list_string = nav_list.innerHTML;
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
        nav.innerHTML += nav_list_string;
        }
    }
}

list_ham_changer();

$(window).resize(function() {
    list_ham_changer();
});