const { When } = require("@wdio/cucumber-framework");
const { When } = require("@wdio/cucumber-framework");
const { pages } = require("./../pageobject");
const { pages } = require("./../pageobject");

class BasePage {

    constructor(url) {
        this.url = url
    }

    open() {
        return browser.url(this.url)
    }
}

module.exports = BasePage;
When('I type JavaScript value in {string} field', function (value, field) {
    return pages('first').searchPanel.inputSearch(field).setValue(value);
});
