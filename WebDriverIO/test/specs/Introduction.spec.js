describe("Introduction",()=>{
    beforeEach(async () => {
        await browser.url('https://www.epam.com/')
      });

      it ("Find 'Services' button on the page'", async()=>{
        await $('//*[@href="/services"]');
     } );


     it ("Find 'Industries' button on the page'", async()=>{
        await $('//*[@href="/insights"]');
     } );


     it ("Find 'Switcher' radio-button on the page'", async()=>{
        await $('//*[@class="switch"]');
     } );


     it ("Find 'Global' button on the page'", async()=>{
        await $('//*[@class="location-selector__button-language"]');
     } );

    })