import { AndrewLintereurPage } from './app.po';

describe('andrew-lintereur App', function() {
  let page: AndrewLintereurPage;

  beforeEach(() => {
    page = new AndrewLintereurPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
