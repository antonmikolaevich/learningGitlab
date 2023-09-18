const FirstPage = require ('./first.page');

/** 
 * @param name {'first'}
 * @returns {FirstPage} 
 */

function page(name) {
    const items = {
      first: new FirstPage(),
      
    }
    return items[name.toLowerCase()]
  }
  
  module.exports = {
    FirstPage,
    page
  }
  