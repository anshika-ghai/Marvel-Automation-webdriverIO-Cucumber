class Page {
    open(base) {
        return browser.url(base);
    }
}
module.exports = new Page();