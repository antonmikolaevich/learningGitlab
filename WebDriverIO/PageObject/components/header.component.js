class HeaderComonent {
    get rootE1() {
        return $('//*[@class="header__inner"]');

    }

    get searchIcon () {
        return this.rootE1.$('span.search-icon');

    }
}
module.exports = HeaderComonent;