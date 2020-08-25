import collection from "../data/data.js"

//adding event listener, it will be handled by clickHandler function
document.addEventListener("click", clickHandler)

//getting elements section
let element = document.getElementById("elementsList");


//main function for adding elements in html file
function fillElement(el, col) {
    for (let i = 0; i < col.length; i++) {

        let objVal = [];
        Object.values(col[i]).forEach(o => objVal.push(o));

        //date section
        let current_datetime = objVal[4];
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        let formatted_date = current_datetime.getDate() + "-" +
            (months[current_datetime.getMonth() - 1]) + "-" +
            current_datetime.getFullYear();
        //end of date section

        //rating section
        let rating = [];

        for (let i = 0; i < objVal[6]; i++) {
            rating.push(`&#9733;`)
        }

        for (let i = 0; i < 5 - objVal[6]; i++) {
            rating.push(`&#9734;`)
        }

        let ratingElement = rating.join(" ");
        //end of rating section

        //price, delivery and availability section
        let price = objVal[3] > 0 ? objVal[2] : "Out Of Stock";
        let currency = objVal[3] > 0 ? objVal[5] : "";
        let available = objVal[3] > 0 ? `Available products: ${objVal[3]} pcs` : "";
        let delivery = objVal[3] > 0 ? `Delivery on ${formatted_date}` : "";
        //end of price, delivery and availability section

        //elements to add section
        el.innerHTML += `<div class="col-lg-4 col-md-6 mb-4">
            <div class="card h-100">
              <a><img id = "image${i}" class="card-img-top"></a>
              <div class="card-body">
                <h4 class="card-title">
                  <a>${objVal[1]}</a>
                </h4>
                <h5>${currency} ${price}</h5>
                <p class="card-text">${available}</p>
                <p class="card-text">${delivery}</p>
              </div>
              <div class="card-footer">
                <small class="text-primary">${ratingElement}</small>
              </div>
            </div>`
        //end of elements to add section

        //image section
        let imgName = objVal[7];

        document.getElementById(`image${i}`).setAttribute("src", imgName)
        //end of image section

    }
}

fillElement(element, collection);


//view section, in this section view can be switched between all, available and out of stock items
function clickHandler(e) {

    if (e.target.innerText === "Available") {
        let selectedCollection = [];
        element.innerHTML = "";

        for (let i = 0; i < collection.length; i++) {
            if (collection[i].UnitsInStock > 0) selectedCollection.push(collection[i])
        }
        fillElement(element, selectedCollection);
    }

    if (e.target.innerText === "Out of Stock") {
        let selectedCollection = [];
        element.innerHTML = "";

        for (let i = 0; i < collection.length; i++) {
            if (collection[i].UnitsInStock === 0) selectedCollection.push(collection[i])
        }
        fillElement(element, selectedCollection)
    }

    if (e.target.innerText === "All") {
        element.innerHTML = "";

        fillElement(element, collection)
    }
}

//end of view section