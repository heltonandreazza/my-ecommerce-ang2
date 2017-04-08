import { myEcommerceAng2Page } from './app.po';

describe('my-ecommerce-ang2 App', () => {
  let page: myEcommerceAng2Page;

  beforeEach(() => {
    page = new myEcommerceAng2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
