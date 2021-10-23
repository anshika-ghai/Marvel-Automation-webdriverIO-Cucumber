const { Given, When, Then } = require('@cucumber/cucumber');
const loginPage = require('../pageobjects/login.page');
const shopPage = require('../pageobjects/shop.page');
const ShopPage = require('../pageobjects/shop.page');

Given('the user is on login page', async() => { // Write code here that turns the phrase above into concrete actions
    await loginPage.open();
    browser.maximizeWindow();
    // expect(browser).toHaveTitle('The Internet');
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
    // await expect(loginPage.clickComics).toExist();
    // await expect(loginPage.clickComics).toHaveTextContaining('COMICS');
    await loginPage.clickComics.click();
    //await loginPage.enterAvengers.click();
    await loginPage.enterAvengers.setValue(avenger);

});


When('User Check and verify number of results {string}', async(number) => {
    await expect(loginPage.suggestionOutput).toExist();
    await loginPage.suggestionOutput.click();
    await expect(loginPage.countOutput).toExist();
    await expect(loginPage.countOutput).toHaveChildren({ number });

});

When('User Check and verify number of pages {string}', async(page) => {
    await expect(loginPage.pageNumber).toExist();
    await expect(loginPage.pageNumber).toHaveTextContaining(page);


});

When('User select the {string} option', async(completeCollection) => {
    await expect(ShopPage.moreButtonClick).toExist();
    await ShopPage.moreButtonClick.click();
    await expect(ShopPage.shopButtonClick).toExist();
    await expect(ShopPage.shopButtonClick).toExist();
    await ShopPage.shopButtonClick.click();
    // await expect(ShopPage.completeYourCollectionOption).toExist();
    // await expect(ShopPage.completeYourCollectionOption).toHaveTextContaining(completeCollection);
    await ShopPage.closeModal.click();
     await ShopPage.completeYourCollectionOption.click();
  });
  
When('User filter by Age {string}', async (string)=> {
    await expect(ShopPage.clickAge).toExist();
    await ShopPage.clickAge.click();
    await expect(ShopPage.filterKids).toExist();
    await ShopPage.filterKids.click();
  });

When('User Sort by price low to high', async ()=> {
    await ShopPage.sortByClick.click();
    await ShopPage.sortBylowToHigh.click();
  });

When('User Add {int} Marvel Logo Pins', async (quantity)=> {
  await expect(ShopPage.product).toExist();
  await expect(ShopPage.product).toExist();
  await ShopPage.product.click();
  for (i=0; i<(quantity-1);i++){
  await ShopPage.increaseQuantity.click();
  }
  });

When('User Check and verify at the basket side pop up that the subtotal is {string}', async (float)=> {
    await expect(ShopPage.addToBag).toExist();
    await ShopPage.addToBag.click();
    await expect(ShopPage.basketTotal).toExist();
    await expect(ShopPage.basketTotal).toExist();

    console.log("asdfsdafffasfdsadsf"+float);
    await expect(ShopPage.basketTotal).toHaveTextContaining(float);
  });