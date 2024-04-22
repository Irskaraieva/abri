// footer lists
function footerLists() {
    const services = document.getElementById('services');
    const products = document.getElementById('products');
    const company = document.getElementById('company');

    const servicesBtn = document.querySelector('.servies-header');
    const productsBtn = document.querySelector('.products-header');
    const companyBtn = document.querySelector('.company-header');

    const arrowServ = document.getElementById('servArrowDown');
    const arrowProd = document.getElementById('prodArrowDown');
    const arrowComp = document.getElementById('compArrowDown');

    // show services
    const showServList = function () {
        services.classList.toggle('visible-list');
        arrowServ.classList.toggle('arrow-up');
    };

    servicesBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        showServList();
    });

    // show products
    const showProdlists = function () {
        products.classList.toggle('visible-list');
        arrowProd.classList.toggle('arrow-up');
    };

    productsBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        showProdlists();
    });

    // show company
    const showCompanylists = function () {
        company.classList.toggle('visible-list');
        arrowComp.classList.toggle('arrow-up');
    };

    companyBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        showCompanylists();
    });

    document.documentElement.addEventListener('click', () => {
        if (company.classList.contains('visible-list')) {
            showCompanylists();
        } else if (products.classList.contains('visible-list')) {
            showProdlists();
        } else if (services.classList.contains('visible-list')) {
            showServList();
        }
    });
}

export default footerLists;


