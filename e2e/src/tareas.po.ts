import { browser, by, element } from 'protractor';

export class TareasPage {

  navigateTo() {
    return browser.get('/tareas');
  }

  getParrafoInicialText() {
    return element(by.css('dvt-tareas p')).getText();
  }

}
