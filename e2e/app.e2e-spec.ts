import { MiniproyectoBertoniPage } from './app.po';

describe('miniproyecto-bertoni App', () => {
  let page: MiniproyectoBertoniPage;

  beforeEach(() => {
    page = new MiniproyectoBertoniPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
