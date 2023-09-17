const MainPage = require('./PageObject/pages/main.page');


const mainPage = new MainPage();

describe("Introduction",()=>{
    beforeEach(async () => {
      await browser.url('https://www.epam.com/')
      });

      it ("Click 'Services' button on the page'", async()=>{
         const buttonServices = $('button.top-navigation__item-link--a11y');
         buttonServices.scrollIntoView();
         buttonServices.click();
         const pageTitle = await browser.getTitle();
 
         expect(pageTitle).toEqual("EPAM | Software Engineering & Product Development Services");
      } );


     it ("Click 'Industries' button on the page'", async()=>{
        const buttonIndustries = await $('//*[@href="/insights"]');
        buttonIndustries.scrollIntoView();
        buttonIndustries.click();
        const pageTitle = await browser.getTitle();
        
        expect(pageTitle).toEqual("EPAM | Software Engineering & Product Development Services");
     } );

     it ("Click 'Global' button on the page'", async()=>{
      const globalButton = await $('//*[@class="location-selector__button-language"]');
      globalButton.scrollIntoView();
      globalButton.click();

      const panel = await $('nav.location-selector__panel');
      await panel.waitForExist({
       timeout: 5000,
       revert: true,
       timeoutMsg: "Sorry, the element is not displayd.",
       interval: 50
      });
      expect(await panel.isExisting()).toEqual(true);

   } );
  
   it ("Open 'BLOG' page'", async()=>{
             const blogelement = await mainPage.mainComponent.blogIcon();
             blogelement.scrollIntoView();
             blogelement.click();
            const wholepage = $('div.scaling-of-text-wrapper');
             await expect( wholepage).toHaveText('Mastering Cloud Costs');
          } );

 //    it ("Open 'BLOG' page'", async()=>{
 //       const blogelement = await $('//*[@href="https://www.epam.com/insights/blogs/mastering-cloud-costs"]');
 //       blogelement.scrollIntoView();
 //       blogelement.click();
 //       const wholepage = $('div.scaling-of-text-wrapper');
 //       await expect( wholepage).toHaveText('Mastering Cloud Costs');
 //    } );

    })