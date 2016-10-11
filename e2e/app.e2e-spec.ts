import { Angular2ccPage } from './app.po';

describe('angular2cc App', function() {
  let page: Angular2ccPage;

  beforeEach(() => {
    page = new Angular2ccPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
