import { browser, by, element } from 'protractor';

export class HomePage {

  navigateTo() {
    return browser.get('/');
  }

  getTitleText() {
    return element(by.css('dvt-root h1')).getText();
  }
}
