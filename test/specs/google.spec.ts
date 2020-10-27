
import SecurePage from '../pages/secure.page';
import GoogleSearchPage from '../pages/google/google.search.page';
import GoogleResultsPage from '../pages/google/google.results.page';
import googleSearchPage from '../pages/google/google.search.page';

describe('Google test', () => {
    
    it('should search google', () => {
        browser.url("https://google.com")
        $('[name=q]').click();
        $('[name=q]').setValue("one shore");
        browser.pause(1000);
        $('[value="Google Search"]').click();
        browser.pause(1000);
        $('.g:nth-of-type(1) a > h3').click();

        console.log(browser.getTitle());
    });

    it('should search google using page objects', () => {
        GoogleSearchPage.open();
        GoogleSearchPage.searchFor("testwizardry");
        GoogleResultsPage.chooseFirstResult();

        console.log(browser.getTitle());
        browser.pause(1000);
    });
});

