const { Given, When, Then } = require("@cucumber/cucumber");
const basePage = require("../pageobjects/base.page");
const SearchPage = require("../pageobjects/search.page");
const ShopPage = require("../pageobjects/shop.page");

Given("the user is on {string} page", async (base) => {
  await basePage.open(base);
  browser.maximizeWindow();
});

When("User clicks on search button", async () => {
  await expect(SearchPage.searchbuttonClick).toExist();
  await SearchPage.searchbuttonClick.click();
});

When("User Search for {string} in the COMICS section", async (avenger) => {
  await SearchPage.clickComics.click();
  await SearchPage.enterAvengers.setValue(avenger);
});

When("User Check and verify number of results {string}", async (number) => {
  await expect(SearchPage.suggestionOutput).toExist();
  await SearchPage.suggestionOutput.click();
  await expect(SearchPage.countOutput).toExist();
  await expect(SearchPage.countOutput).toHaveChildren({ number });
});

When("User Check and verify number of pages {string}", async (page) => {
  await expect(SearchPage.pageNumber).toExist();
  await expect(SearchPage.pageNumber).toHaveTextContaining(page);
});

When("User select the Complete Your Collection option", async () => {
  await expect(ShopPage.moreButtonClick).toExist();
  await ShopPage.moreButtonClick.click();
  await expect(ShopPage.shopButtonClick).toExist();
  await expect(ShopPage.shopButtonClick).toExist();
  await ShopPage.shopButtonClick.click();
  await expect(ShopPage.closeModal).toExist();
  await ShopPage.closeModal.click();
  await ShopPage.completeYourCollectionOption.click();
});

When("User filter by Age {string}", async (string) => {
  await expect(ShopPage.clickAge).toExist();
  await ShopPage.clickAge.click();
  await expect(ShopPage.filterKids).toExist();
  await ShopPage.filterKids.click();
});

When("User Sort by price low to high", async () => {
  await ShopPage.sortByClick.click();
  await ShopPage.sortBylowToHigh.click();
});

When("User Add {int} Marvel Logo Pins", async (quantity) => {
  await expect(ShopPage.product).toExist();
  await expect(ShopPage.product).toExist();
  await ShopPage.product.click();
  for (i = 0; i < quantity - 1; i++) {
    await ShopPage.increaseQuantity.click();
  }
});

When(
  "User Check and verify at the basket side pop up that the subtotal is {string}",
  async (float) => {
    await expect(ShopPage.addToBag).toExist();
    await ShopPage.addToBag.click();
    await expect(ShopPage.basketTotal).toExist();
    await expect(ShopPage.basketTotal).toExist();
    await expect(ShopPage.basketTotal).toHaveTextContaining(float);
  }
);
