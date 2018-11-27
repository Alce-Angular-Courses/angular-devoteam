import { HomePage } from './home.po';
import { TareasPage } from './tareas.po';
import { AboutPage } from './about.po';

describe('HomePage de la App', () => {
  let page: HomePage;

  beforeEach(() => {
    page = new HomePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Saludos angular-devoteam!');
  });
});


describe('TareasPage' , () => {
  let page: TareasPage;

  beforeEach( () => {
    page = new TareasPage();
  });

  it ('inicialmente aparece el parrafo por defecto ', () => {
    page.navigateTo();
    expect(page.getParrafoInicialText()).toEqual('tareas works!');
  });

});


describe('AboutPage' , () => {
  let page: AboutPage;

  beforeEach( () => {
    page = new AboutPage();
  });

  it ('inicialmente aparece el parrafo por defecto ', () => {
    page.navigateTo();
    expect(page.getParrafoInicialText()).toEqual('about works!');
  });

});

