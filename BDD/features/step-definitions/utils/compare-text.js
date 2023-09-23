function compareText(firstText, secondText, compareOption) {
    switch (compareOption) {
      case "contain":
        return expect(firstText).toContain(secondText);
      case "not contain":
        return expect(firstText).not.toContain(secondText);
      case "be equal to":
        return expect(firstText).toEqual(secondText);
      case "not be equal to":
        return expect(firstText).not.toEqual(secondText);
      default:
        throw Error(`'${compareOption}' is not valid comparison option!`)
    }
  }
  
  module.exports = compareText
  