class SearchPanel {
    get rootE1() {
        return $('//*[@class="header__inner"]');

    }

    get findBtn () {
        return this.rootE1.$('button.custom-button.button-text');

    }
}

module.exports = SearchPanel;