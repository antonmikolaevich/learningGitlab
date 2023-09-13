describe("Basic Commands",()=>{
    beforeEach(async () => {
        await browser.url('https://www.epam.com/')
      });
    
    it("Check Title", async ()=>{
      const pageTitle = await browser.getTitle();

      expect(pageTitle).toEqual("EPAM | Software Engineering & Product Development Services");
    });
    
    it ("Check 'Accept Cookies' button change the colour after over'", async()=>{
      const cookies = await $('//button[text()="Accept All"]');
      const color = await cookies.getCSSProperty('color');
      console.log(color);

      await browser.pause(10000);
    
   });


    it("Check 'Accept Cookies' button", async () => {
      await $('//button[text()="Accept All"]').waitForDisplayed({ timeout: 3000 });
      await $('//button[text()="Accept All"]').click();
      const acceptCookies = await $('//*[@id="onetrust-banner-sdk"]');
      console.log(await acceptCookies.isDisplayed());
    });
    

 //   it ("Check 'Accept Cookies' button '", async()=>{
 //      const element = await $('//button[text()="Accept All"]');
 //      await element.waitForClickable();
 //      await element.click();
 //      const acceptCookies = await $('//*[@id="onetrust-banner-sdk"]');
 //      console.log (await acceptCookies.isDisplayed());
 //   } );

 //   it ("Check 'Cookies Settings' button is clickable", async()=>{
 //     await $('//button[text()="Cookies Settings"]').click();
 //     const cookiesSettings = await $('//*[@id="ot-pc-content"]/section');
 //    console.log (await cookiesSettings.isDisplayed());
 //   });

    it ("Check search option", async()=>{
      await $('span.search-icon').click();
      const searchInput = await $('input#new_form_search.header-search__input');
      await searchInput.setValue("JavaScript");
      await $('button.custom-button.button-text').click();
      const searchResult = await $('h2.search-results__counter[tabindex="0"]');
      console.log (await searchResult.isDisplayed());

      await browser.pause(5000);
    });

   it ('Check the openning Search result', async()=>{
      await $('span.search-icon').click();
      const searchInput = await $('input#new_form_search.header-search__input');
      await searchInput.setValue("JavaScript");
      await $('button.custom-button.button-text').click();
      await $('a.search-results__title-link').click();

      const pageTitle = await browser.getTitle();
      console.log(pageTitle);
       
   });
  
})