const BaseComponent = require ('./base.component');

class SearchPanel extends BaseComponent {

    constructor() {
        super('//*[@class="header__inner"]');
    }
    
    get findBtn () {
        return this.rootE1.$('button.custom-button.button-text');

    }
    get inputSearch() {
        return this.rootE1.$('input#new_form_search.header-search__input');
    }
}

module.exports = SearchPanel;