class HeaderComponent  {

    get rootEl(){
        return $('//*[@id="main"]/div[1]/div[14]/section');
    }

    get servicesBtn(){
        return this.rootEl.$('//*[@href="/services"]');
    }
  
 // item (param) {
 //  const selectors ={
 //       services: '[//*[@href="/services"]]',
 //       industries: '[href="/industries"]',
 //       insights: '[href="/insights"]',
 //       about: '[href="/about"]',
 //       careers: '[href="/careers"]'
 //   };
 //   return this.rootEl.$(selectors[param.toLowerCase()]);
 // }
}

module.exports = HeaderComponent;
