class BaseComponent{

constructor(rootSelector) {
    this.rootSelector = rootSelector;
}

    get rootE1() {
        return $(this.rootSelector);
    }
}

module.exports = BaseComponent;