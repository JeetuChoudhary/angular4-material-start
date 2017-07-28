import { SportsToolsPage } from './app.po';

describe('sports-tools App', () => {
  let page: SportsToolsPage;

  beforeEach(() => {
    page = new SportsToolsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
