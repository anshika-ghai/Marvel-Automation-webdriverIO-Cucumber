const Page = require('./base.page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get searchbuttonClick() {
        return $('//*[@class="search desktopNav__tabContainer"]')
    }
    get clickComics() {
        return $('//*[@class="search-bar"]//*[text()="comics"]')
    }

    get enterAvengers() {
        return $('//*[@id="search_bar-1"]//div[1]//*[@class="typeahead__container"]//*[@class="typeahead__input"]')
    }

    get suggestionOutput() {
        return $('//*[@class="typeahead__suggestion"][1]')
    }
    get countOutput() {
        return $('//*[@class="search-list__cards"]')
    }
    get pageNumber() {
            return $('//*[@class="pagination"]//child::li[last()-1]')
        }
        //*[@class = 'typeahead__input']
        //div[@class="search-bar"]//div[1]//*[@class="typeahead__container"]//*[@class="typeahead__input"]

    // get inputPassword() { return $('#password') }
    // get btnSubmit() { return $('button[type="submit"]') }
    // get loginPageElement() { return $('div[class="example"] h2') }
    // get messageElement() { return $('#flash') }

    // async search(avenger) {

    //     await expect(LoginPage.clickComics).toExist();
    //     // await expect(loginPage.clickComics).toHaveTextContaining('COMICS');
    //     // await loginPage.clickComics.click();
    //     // await loginPage.enterAvengers.click();
    //     // await (await (loginPage.enterAvengers).setValue(avenger));
    //     await this.clickComics.click();
    //     await this.enterAvengers.click();
    //     await (await this.enterAvengers.setValue(avenger));
    // }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open() {
        return super.open('https://www.marvel.com/');
    }
}

module.exports = new LoginPage();