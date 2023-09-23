const BaseComponent = require ('./base.component');

class HeaderComonent extends BaseComponent {

    constructor() {
        super('//*[@class="header__inner"]');
    }

    get searchIcon () {
        return this.rootE1.$('span.search-icon');

    }

    async click(icon) {
        if (icon.toLowerCase() === 'save') {
          await this.searchIcon.click()
        }
    }
    
    item(param) {
        const selector = {
            services: '//*[@href="/services"]',
            industries: '//*[@id="wrapper"]/div[2]/div[1]/header/div/div/nav/ul/li[2]/span[1]/a',
            insights: '//*[@href="/insights"]',
            about: '//*[@href="/about"]',
            carreers: '//*[@href="/careers"]'
        }
        return this.rootE1.$(selector[param.toLowerCase()])
    }

    get globalBtn () {
        return this.rootE1.$('//*[@class="location-selector__button-language"]');

    } 

}
module.exports = HeaderComonent;