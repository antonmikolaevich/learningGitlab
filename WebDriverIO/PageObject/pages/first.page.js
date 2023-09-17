class FirstPage {
   
  async open() {
    await browser.url('https://www.epam.com/')
  }
}

module.exports = FirstPage;
