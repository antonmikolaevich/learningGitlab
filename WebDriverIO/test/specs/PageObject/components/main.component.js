class MainComponent  {

    get rootEl(){
        return $('//*[@id="main"]/div[1]/div[14]/section');
    }

    get blogIcon(){
        return this.rootEl.$('//*[@href="https://www.epam.com/insights/blogs/mastering-cloud-costs"]');
    }
  
}

module.exports = MainComponent;