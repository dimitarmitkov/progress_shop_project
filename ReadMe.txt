1. This project is designed to operate with any browser, localhost;
2. The entry point is index.html;
3. Initial data is extended with following features:
    - Currency - text showing currency abbreviations
    - Rating - numbers 1 to 5 showing product rating (visualized with stars)
    - Image - images of products downloaded form Telerik (docs.telerik.com)
4. This project is based on Bootstrap framework;
5. Main project's functionalities are placed in javaScript/progressShopMain.js file. As follows:
    - products are presented by picture, name, price, number of available products, delivery date and rating
    - if product is out of stock it is presented only by name, "Out Of Stock" note and rating
    - navigation bar shows name of the company, logo and 3 selection options:
        - "All" feature shows all products, no matter if available or not
        - "Available" feature shows only available products
        - "Out Of Stock" feature shows only out of stock products
    - initial data is imported from data/data.js file
6. Navigation bar functionalities are placed in javaScript/progressShopNav.js file
    - initial data is imported form data/dataNav.js file. This is to allow easily adding features in nav bar
7. Footer functionalities are placed in javaScript/progressShopFooter.js file
    - it has only one functionality - to add end year of copyright period e.g.
    in 2020 this will be the only year shown, next year will appear in this way: "2020 - 2021"
8. All images used in project are located in img folder;
9. Bootstrap CSS in located in vendor/bootstrap folder;
10. Main css file - shop-homepage.css is located in css folder;
