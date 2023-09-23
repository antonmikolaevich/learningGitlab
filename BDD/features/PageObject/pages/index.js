const FirstPage = require ('./first.page');

/** 
 * @param name {'first'}
 * @returns {FirstPage} 
 */

function pages(name) {
    const items = {
      first: new FirstPage(),
      
    }
    return items[name.toLowerCase()]
  }
  
  module.exports = {
    FirstPage,
    pages
  }
  