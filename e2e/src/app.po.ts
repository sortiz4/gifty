import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): unknown {
    return browser.get('/');
  }

  getParagraphText(): unknown {
    return element(by.deepCss('app-root ion-content')).getText();
  }
}
