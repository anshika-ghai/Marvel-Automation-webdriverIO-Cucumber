
/**
 * sub page containing specific selectors and methods for a specific page
 */
class SearchPage {
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
        return $('//*[@class="typeahead__suggestion"][5]')
    }
    get countOutput() {
        return $('//*[@class="search-list__cards"]')
    }
    get pageNumber() {
            return $('//*[@class="pagination"]//child::li[last()-1]')
        }
     
}

module.exports = new SearchPage();