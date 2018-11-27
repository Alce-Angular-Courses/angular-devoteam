import { browser, by, element } from 'protractor';

export class AboutPage {

  navigateTo() {
    return browser.get('/about');
  }

  getParrafoInicialText() {
    return element(by.css('dvt-about p')).getText();
  }

}
