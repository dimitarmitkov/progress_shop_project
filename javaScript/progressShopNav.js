import nav from "../data/navData.js";

let navElement = document.getElementById("navigationList");

function navigation (n){
    for (let i = 0; i < n.length; i++) {
        navElement.innerHTML +=
            `<li class="nav-item">
        <a class="nav-link" href="#">${n[i]}</a>
        </li>`
    }
}

navigation(nav);