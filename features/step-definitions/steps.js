const { Given, When, Then } = require('@cucumber/cucumber');
const { login } = require('../pageobjects/login.page');
const loginPage = require('../pageobjects/login.page');
// Given the user is on login page
// Undefined.Implement with the following snippet:



Given('the user is on login page', async() => { // Write code here that turns the phrase above into concrete actions
    await loginPage.open();
    // expect(browser).toHaveTitle('The Internet');
});

// ?
// When the user enters username as "tomsmith"
// and password as "SuperSecretPassword!"
// Undefined.Implement with the following snippet:

When('the user enters username as {string} and password as {string}', async(username, password) => { // Write code here that turns the phrase above into concrete actions
    loginPage.inputUsername.setValue(username);
    loginPage.inputPassword.setValue(password);
});

When('I wait for {string} seconds', function(time) {

});

When('User clicks on search button', async() => {
    // Write code here that turns the phrase above into concrete actions
    await expect(loginPage.searchbuttonClick).toExist();
    //await expect(loginPage.searchbuttonClick).toHaveTextContaining('Sign In');
    await loginPage.searchbuttonClick.click();
    //  browser.setTimeout({ 'pageLoad': 10000 })

});

When('User Search for {string} in the COMICS section', async(avenger) => {
    // Write code here that turns the phrase above into concrete actions
    //loginPage.search(avenger);
    await expect(loginPage.clickComics).toExist();
    await expect(loginPage.clickComics).toHaveTextContaining('COMICS');
    await loginPage.clickComics.click();
    //await loginPage.enterAvengers.click();
    await loginPage.enterAvengers.setValue(avenger);

});


When('User Check and verify number of results {string}', async(number) => {
    await loginPage.suggestionOutput.click();
    await expect(loginPage.countOutput).toExist();
    await expect(loginPage.countOutput).toHaveChildren({ number });

    //console.log(temp);
    //rows = loginPage.countOutput.getSize();
    //rows.length();


});

When('User Check and verify number of pages {string}', async(page) => {
    await expect(loginPage.pageNumber).toExist();
    await expect(loginPage.pageNumber).toHaveTextContaining(page);


});