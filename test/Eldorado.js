const puppeteer = require('puppeteer');

class Eldorado {
    async openEldorado(url) {
        this.browser = await puppeteer.launch({
            headless: false,
        });
        const page = await this.browser.newPage();
        await page.setViewport({
            width: 1400,
            height: 900,
            deviceScaleFactor: 1,
        });
        await page.goto(url);
        return page;
    }

    async mainPage(eldoradoPage) {
        await eldoradoPage.click(
            '#content > div.data-root > header > div > div > div.valign-wrapper.center.\\31 \\/5--desktop-large.\\31 \\/5--desktop-small.\\31 \\/8--tablet.grid__cell > figure > a'
        );
        return eldoradoPage;
    }
    async addToCart(eldoradoPage) {
        await eldoradoPage.waitForSelector('#productsList > li:nth-child(1)');
        await eldoradoPage.click('#productsList > li:nth-child(1)');
        await eldoradoPage.waitForSelector('#pd-buy-button');
        await eldoradoPage.click('#pd-buy-button');
        await eldoradoPage.click(
            '#pageHeader > div._1LInFm5fZYpJXSYdiJTWxA > div._2RxWSIBAMNxPRAQl_Ji8md._2hmJgCnF8j_m3mlXVpOgwy.BcyPBJXhtPT5BjMdqR4tt > a'
        );
        return eldoradoPage;
    }

    async filterByParameter(eldoradoPage) {
        async function filterByColor() {
            await eldoradoPage.waitForSelector('#element-10884 > div');
            await eldoradoPage.click('#element-10884 > div');
            await eldoradoPage.waitForSelector('#input-17516');
            await eldoradoPage.click('#input-17516');
            return eldoradoPage;
        }
        async function filterByCity() {
            await eldoradoPage.waitForSelector('#input-85');
            await eldoradoPage.click('#input-85');
            return eldoradoPage;
        }
        async function orderByPrice() {
            await eldoradoPage.waitForSelector(
                '#page-footer-content-id > div > div > div > div.test > div > div.catalog-content.catalog-content-container.grid > div.catalog-global-content.\\34 \\/5--desktop-large.\\37 \\/9--desktop-small.\\33 \\/4--tablet.grid__cell > div.catalog-header.custom-column-content > div.grid.catalog-sort.valign-wrapper.grid--middle > div > ul > li:nth-child(3)'
            );
            await eldoradoPage.click(
                '#page-footer-content-id > div > div > div > div.test > div > div.catalog-content.catalog-content-container.grid > div.catalog-global-content.\\34 \\/5--desktop-large.\\37 \\/9--desktop-small.\\33 \\/4--tablet.grid__cell > div.catalog-header.custom-column-content > div.grid.catalog-sort.valign-wrapper.grid--middle > div > ul > li:nth-child(3)'
            );
            return eldoradoPage;
        }

        return {
            filterByColor: filterByColor,
            filterByCity: filterByCity,
            orderByPrice: orderByPrice,
        };
    }

    async searchByQuery(eldoradoPage) {
        await eldoradoPage.waitForSelector(
            '#content > div.data-root > div.bottom-tier-wrapper > div > div.custom-column-content > div.search > div.search-input-container > input'
        );
        await eldoradoPage.type(
            '#content > div.data-root > div.bottom-tier-wrapper > div > div.custom-column-content > div.search > div.search-input-container > input',
            'dyson',
            { delay: 300 }
        );
        await eldoradoPage.keyboard.press('Enter');
        return eldoradoPage;
    }

    async searchByCategory(eldoradoPage) {
        await eldoradoPage.waitForSelector(
            '#page-footer-content-id > div > div > div > div.search-output > div.search-cats > div.cats-list > ul > li:nth-child(1) > a'
        );
        await eldoradoPage.click(
            '#page-footer-content-id > div > div > div > div.search-output > div.search-cats > div.cats-list > ul > li:nth-child(1) > a'
        );
        return eldoradoPage;
    }

    async showPhones(eldoradoPage) {
        await eldoradoPage.waitForSelector(
            '#page-footer-content-id > div > div > div.main-banner > div.wrapper-megamenu > div > div > div > div:nth-child(1) > a'
        );
        await eldoradoPage.click(
            '#page-footer-content-id > div > div > div.main-banner > div.wrapper-megamenu > div > div > div > div:nth-child(1) > a'
        );
        await eldoradoPage.waitForSelector(
            '#page-footer-content-id > div > div.row.page-container > div > div.node-items-list.grid > div:nth-child(2) > div > div.description > div.title > a'
        );
        await eldoradoPage.click(
            '#page-footer-content-id > div > div.row.page-container > div > div.node-items-list.grid > div:nth-child(2) > div > div.description > div.title > a'
        );
        return eldoradoPage;
    }

    async addToCart(eldoradoPage) {
        await eldoradoPage.waitForSelector(
            '#page-footer-content-id > div > div > div.home-page-content > section > div.row.section-items-list > article:nth-child(1) > div > div > div.goods-item-content > div.buy-block > div.buy-button-placeholder.button > div'
        );
        await eldoradoPage.click(
            '#page-footer-content-id > div > div > div.home-page-content > section > div.row.section-items-list > article:nth-child(1) > div > div > div.goods-item-content > div.buy-block > div.buy-button-placeholder.button > div'
        );
        return eldoradoPage;
    }

    async goToCart(eldoradoPage) {
        await eldoradoPage.waitForSelector(
            '#content > div.data-root > div.bottom-tier-wrapper > div > div.custom-column-content > div.custom-column-content-icons-wrapper.custom-column-content-icons-wrapper-not-authorized > div.wrapper-cart-link > div > div.rodal-dialog.active-baskt.basket-preview-container > div > div > div.cart.checkout-cart-block-container > div > div.price-order-container > div.container-buttons > a > button'
        );
        await eldoradoPage.click(
            '#content > div.data-root > div.bottom-tier-wrapper > div > div.custom-column-content > div.custom-column-content-icons-wrapper.custom-column-content-icons-wrapper-not-authorized > div.wrapper-cart-link > div > div.rodal-dialog.active-baskt.basket-preview-container > div > div > div.cart.checkout-cart-block-container > div > div.price-order-container > div.container-buttons > a > button'
        );
        return eldoradoPage;
    }

    async deleteFromCart(eldoradoPage) {
        await eldoradoPage.waitForSelector(
            '#page-footer-content-id > div > div > div > div.goods-container > div > div > div.remove-item-in-cart'
        );
        await eldoradoPage.click(
            '#page-footer-content-id > div > div > div > div.goods-container > div > div > div.remove-item-in-cart'
        );
        return eldoradoPage;
    }

    async endTest() {
        this.browser.close();
    }
}

module.exports.Eldorado = Eldorado;
