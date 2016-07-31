import { MisFrasesDeVidaPage } from './app.po';

describe('mis-frases-de-vida App', function() {
  let page: MisFrasesDeVidaPage;

  beforeEach(() => {
    page = new MisFrasesDeVidaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
