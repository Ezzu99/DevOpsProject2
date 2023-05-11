const { Builder, By } = require("selenium-webdriver");
var should = require("chai").should();

const Test = async () => {
    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get("file://" + __dirname + "/../index.html");

    let pageTitle = await driver.getTitle();

    let numRows = (await driver.findElements(By.xpath("//table/tbody/tr")))
        .length;

    pageTitle.should.equal("Weather Forecast");
    numRows.should.equal(7);

    driver.close();
};
Test();
