class ShopPage {
    get moreButtonClick() {
        return $('//*[@id="mvl-flyout-button-7"]')
    }
    get shopButtonClick() {
        return $('//*[@id="nav-flyout-7"]//*[@class="mvl-flyout__secondary-link"][4]')
    }
    get completeYourCollectionOption() {
        return $('//*[text()="Complete Your Collection"]')
    }
    get closeModal() {
        return $('//*[@class="close focusClass no-thanks"][@data-dismiss="modal"]')
    }
    get clickAge() {
        return $('//*[@data-linkid="list_page_content/filter/age"]')
    }
    get filterKids() {
        return $('//*[@data-linkid="list_page_content/filter/Age/Kids"]//span[@class="checkbox__refinement"]')
    }
    get sortByClick() {
        return $('//*[@class="sort__container"]//*[@class="icon__filter_dropdown_arrow"]')
    }
    get sortBylowToHigh() {
        return $('//*[@id="sortListBox-price-low-to-high"]')
    }
    get product() {
        return $('//*[@class="product__tile_alt_img current "]//*[@title="Marvel Logo Pin – Rainbow Marvel Collection"]')
    }
    get quickShop() {
        return $('//*[@data-productname="Marvel Logo Pin – Rainbow Marvel Collection"][@tmp_title="Quick Shop"]')
    }
    get increaseQuantity() {
        return $('//*[@class="product__qty_btn product__qty_btn--up button--icon"]')
    }
    get addToBag() {
        return $('//*[@data-linkid="product_page_content/product page action/add to bag"]')
    }
    get basketTotal() {
        return $('//*[@class="minibag__section minibag__footer"]//*[@class="subtotal__container"]//*[@class="minibag__subtotal_value"]')
    }
}

module.exports = new ShopPage();