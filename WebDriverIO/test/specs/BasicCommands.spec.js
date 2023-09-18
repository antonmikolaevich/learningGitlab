const FirstPage = require ('./../../PageObject/pages/first.page');

const firstPage = new FirstPage();


describe("Basic Commands",()=>{
    beforeEach(async () => {
      await firstPage.open() 
      });
    
    it("Check Title", async ()=>{
      const pageTitle = await browser.getTitle();

      expect(pageTitle).toEqual("EPAM | Software Engineering & Product Development Services");
    });
    
    it ("Check 'Accept Cookies' button change the colour after over'", async()=>{
      const cookies = await $("//button[text()='Accept All']");
      const color = await cookies.getCSSProperty('color');
      console.log(color);

      await browser.pause(10000);
    
   });


   browser.addCommand("customClick", async function () {
      await this.waitForDisplayed();
      console.log("Before click");
      await this.click();
      console.log("After click");
    }, true);
    it("Check 'Accept Cookies' button", async () => {
      const acceptAllButton = await $("//button[text()='Accept All']");
      await acceptAllButton.customClick();
      const acceptCookies = await $("//*[@id='onetrust-banner-sdk']");
      console.log(await acceptCookies.isDisplayed());
    });
      
  

 //   it ("Check 'Cookies Settings' button is clickable", async()=>{
 //     await $('//button[text()="Cookies Settings"]').click();
 //     const cookiesSettings = await $('//*[@id="ot-pc-content"]/section');
 //    console.log (await cookiesSettings.isDisplayed());
 //   });

 it ("Check search option", async()=>{
  await firstPage.headerComponent.searchIcon.click();
  const searchInput = await $('input#new_form_search.header-search__input');
  await searchInput.setValue("JavaScript");
  await firstPage.searchPanel.findBtn.click();
  const searchResult = await $('h2.search-results__counter[tabindex="0"]');
  console.log (await searchResult.isDisplayed());

  await browser.pause(5000);
});
it ('Check the openning Search result', async()=>{
  await firstPage.headerComponent.searchIcon.click();
  const searchInput = await $('input#new_form_search.header-search__input');
  await searchInput.setValue("JavaScript");
  await firstPage.searchPanel.findBtn.click();
  await $('a.search-results__title-link').click();

  const pageTitle = await browser.getTitle();
  console.log(pageTitle);
   
});

//    it ("Check search option", async()=>{
//      await $('span.search-icon').click();
//      const searchInput = await $('input#new_form_search.header-search__input');
//      await searchInput.setValue("JavaScript");
//      await $('button.custom-button.button-text').click();
//      const searchResult = await $('h2.search-results__counter[tabindex="0"]');
//      console.log (await searchResult.isDisplayed());
//
//      await browser.pause(5000);
//    });

//   it ('Check the openning Search result', async()=>{
//      await $('span.search-icon').click();
//      const searchInput = await $('input#new_form_search.header-search__input');
//      await searchInput.setValue("JavaScript");
//      await $('button.custom-button.button-text').click();
//      await $('a.search-results__title-link').click();
//
//      const pageTitle = await browser.getTitle();
//      console.log(pageTitle);
       
//   });
  
})