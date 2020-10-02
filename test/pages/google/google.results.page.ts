class GoogleResultsPage 
{
    get results() { return $$('.g a > h3'); }

    chooseFirstResult()
    {
        this.chooseResult(0);
    }

    chooseResult(number) 
    {
        this.results[number].click();
    }
}

export default new GoogleResultsPage();