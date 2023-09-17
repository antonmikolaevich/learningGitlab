 const BasePage = require ('../base.page');
 const MainPage = require ('../main.page');

 /**
  * @param name {'base' | 'main'} 
  * @returns {BasePage | MainPage}
  */
 
 function pages(name){
    const items = {
        base: new BasePage(),
        main: new MainPage()
    }
    return items[name.toLowerCase()];
 }

 module.exports = {
    BasePage,
    MainPage,
    pages,
 }