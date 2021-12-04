const reporter = require('@wdio/allure-reporter').default;
const { Eldorado } = require('../Eldorado.js');

describe('Testing products filters', function () {
    let page;
    let eldorado = new Eldorado();
    this.timeout(30000);
    before(async () => {
        page = await eldorado.openEldorado('https://www.eldorado.ua/');
    });
    it('Go to phones page and filter by city', async function () {
        reporter.addDescription('testing filtering by city');
        reporter.startStep('go to phones page');
        let mainPage = await eldorado.mainPage(page);
        let filterByParameterPage = await eldorado.showPhones(mainPage);
        let { filterByCity } = await eldorado.filterByParameter(
            filterByParameterPage
        );
        await filterByCity();
        reporter.endStep();
    });

    it('Go to phones page and order by price', async function () {
        reporter.addDescription('testing ordering by price');
        reporter.startStep('go to phones page');
        let mainPage = await eldorado.mainPage(page);
        let filterByParameterPage = await eldorado.showPhones(mainPage);
        let { orderByPrice } = await eldorado.filterByParameter(
            filterByParameterPage
        );
        await orderByPrice();
        reporter.endStep();
    });

    it('Go to phones page and filter by color', async function () {
        reporter.addDescription('testing filtering by color');
        reporter.startStep('go to phones page');
        let mainPage = await eldorado.mainPage(page);
        let filterByParameterPage = await eldorado.showPhones(mainPage);
        let { filterByColor } = await eldorado.filterByParameter(
            filterByParameterPage
        );
        await filterByColor();
        reporter.endStep();
    });
    this.afterAll(async () => {
        await eldorado.endTest();
    });
});

describe('Testing products searching', function () {
    //working
    let page;
    let eldorado = new Eldorado();
    this.timeout(30000);
    before(async () => {
        page = await eldorado.openEldorado('https://www.eldorado.ua/');
    });
    it('Search product by query', async function () {
        reporter.addDescription('testing search by query');
        reporter.startStep('enter query');
        await eldorado.searchByQuery(page);
        reporter.endStep();
    });

    it('Search product by category', async function () {
        reporter.addDescription('testing search by category');
        reporter.startStep('select category');
        await eldorado.searchByCategory(page);
        reporter.endStep();
    });

    this.afterAll(async () => {
        await eldorado.endTest();
    });
});

describe('Testing cart', function () {
    //working
    let page;
    let eldorado = new Eldorado();
    this.timeout(30000);
    before(async () => {
        page = await eldorado.openEldorado('https://www.eldorado.ua/');
    });
    it('Add product to cart', async function () {
        reporter.addDescription('adding product to cart');
        reporter.startStep('add product');
        await eldorado.addToCart(page);
        reporter.endStep();
    });

    it('Go to cart', async function () {
        reporter.addDescription('checking cart');
        reporter.startStep('go to cart');
        await eldorado.goToCart(page);
        reporter.endStep();
    });

    it('Delete product from cart', async function () {
        reporter.addDescription('deleting product from cart');
        reporter.startStep('delete product');
        await eldorado.deleteFromCart(page);
        reporter.endStep();
    });

    this.afterAll(async () => {
        await eldorado.endTest();
    });
});
