const SearchPanel = require('./../components/searchpanel.component');

class FirstPage {

  constructor(){
    this.searchPanel = new SearchPanel();
  }
   
  async open() {
    await browser.url('https://www.epam.com/')
  }
}

module.exports = FirstPage;
