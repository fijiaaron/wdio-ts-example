class GoogleSearchPage 
{
    get searchField() { return $('[name=q]'); }
    get searchButton() { return $('[value="Google Search"]'); }

    searchFor(terms)
    {
        this.searchField.click();
        this.searchField.clearValue();
        this.searchField.setValue(terms);
        this.searchButton.click();
    }
    
    open()
    {
        return browser.url(`https://google.com/`)
    }
}

export default new GoogleSearchPage();
