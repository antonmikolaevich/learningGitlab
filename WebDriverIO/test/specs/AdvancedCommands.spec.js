describe("Advanced commands",()=>{
    beforeEach(async () => {
        await browser.url('https://www.epam.com/')
      });

  //    it ("browser actions", async()=>{
  //      const buttonColour = await $('//button[text()="Accept All"]');
  //     await buttonColour.moveTo();
  //      await browser.pause(7000);
   // });

      it ("execute() command", async()=>{
        const headerContent = await $('//*[@href="/services"]');
        await browser.execute(function(headerContent){
            headerContent.style.border = "white solid 10px";
        }, headerContent);
        await browser.pause(5000);
      });

    it ("waitUntil() command", async()=>{
        await $('span.search-icon').click();
        await browser.waitUntil(
            async() => (await $('//*[@class="header-search__panel opened"]').isDisplayed()),
            {
                timeout: 5000,
                interval: 600,
                timeoutMsg: "Search panel doesn't open"
            }
            );
            });
    it ("setCookies()", async()=>{
      await browser.pause(6000);
      await browser.setCookies([
        {
          name: "CrazyCookies",
          value: "281909",
        }],
        await browser.pause(10000)
        )
    })  
  })