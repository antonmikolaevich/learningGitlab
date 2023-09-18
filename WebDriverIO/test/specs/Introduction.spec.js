const FirstPage = require ('./../../PageObject/pages/first.page');
const HeaderComonent = require ('./../../PageObject/components/header.component')

const firstPage = new FirstPage();
const header = new HeaderComonent();


describe("Introduction",()=>{
    beforeEach(async () => {
      await firstPage.open() 
      });

      it ("Click 'Services' button on the page'", async()=>{
         const buttonServices = await header.item('services');
         buttonServices.scrollIntoView();
         buttonServices.click();
         const pageTitle = await browser.getTitle();
 
         expect(pageTitle).toEqual("EPAM | Software Engineering & Product Development Services");
      } );


     it ("Click 'Insights' button on the page'", async()=>{
        const buttonIndustries = await header.item('insights');
        buttonIndustries.scrollIntoView();
        buttonIndustries.click();
        const pageTitle = await browser.getTitle();
        
        expect(pageTitle).toEqual("EPAM | Software Engineering & Product Development Services");
     } );

     it ("Click 'Global' button on the page'", async()=>{
      const globalButton = await header.globalBtn;
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
  
 //  it ("Open 'BLOG' page'", async()=>{
 //            const blogelement = await mainPage.mainComponent.blogIcon();
 //            blogelement.scrollIntoView();
 //            blogelement.click();
 //           const wholepage = $('div.scaling-of-text-wrapper');
 //            await expect( wholepage).toHaveText('Mastering Cloud Costs');
 //         } );

    it ("Open 'BLOG' page'", async()=>{
        const blogelement = await $('//*[@href="https://www.epam.com/insights/blogs/mastering-cloud-costs"]');
        blogelement.scrollIntoView();
        blogelement.click();
        const wholepage = $('div.scaling-of-text-wrapper');
        await expect( wholepage).toHaveText('Mastering Cloud Costs');
     } );

    })