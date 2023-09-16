const MainComponent = require('./PageObject/components/main.component');

class MainPage {
    constructor(){
        this.mainComponent = new  MainComponent;
    
    }

  async open() {
    await browser.url('https://www.epam.com/')
  }
}

module.exports = MainPage;