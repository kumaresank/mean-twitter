import { TabletopMeanPage } from './app.po';

describe('tabletop-mean App', function() {
  let page: TabletopMeanPage;

  beforeEach(() => {
    page = new TabletopMeanPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
