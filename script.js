
const print_l = () => {
    if (window.innerWidth < "400px") {
    let nav_bar = document.querySelector("nav");
    let nav_list = document.querySelector(".nav_list");
    nav_bar.removeChild(nav_list);
    }
}

print_l();