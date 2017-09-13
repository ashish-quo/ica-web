import { IcaWebPage } from './app.po';

describe('ica-web App', () => {
  let page: IcaWebPage;

  beforeEach(() => {
    page = new IcaWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
