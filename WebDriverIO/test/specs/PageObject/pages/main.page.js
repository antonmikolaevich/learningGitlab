const MainComponent = require('./components');

class MainPage {
    constructor(){
        this.mainComponent = new  MainComponent;
    
    }

  async open() {
    await browser.url('https://www.epam.com/')
  }
}

module.exports = MainPage;