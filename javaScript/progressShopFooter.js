let footerText = document.getElementById("footerText");

let today = new Date();

let year = today.getFullYear();

footerText.innerText = year===2020? `Copyright © OnwardMovementShop Website 2020` :
    `Copyright © OnwardMovementShop Website 2020 - ${year}`