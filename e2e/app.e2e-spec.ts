import { Pswrkinga2animTodosPage } from './app.po';

describe('pswrkinga2anim-todos App', function() {
  let page: Pswrkinga2animTodosPage;

  beforeEach(() => {
    page = new Pswrkinga2animTodosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
