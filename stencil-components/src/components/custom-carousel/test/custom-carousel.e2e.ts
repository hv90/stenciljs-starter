import { newE2EPage } from '@stencil/core/testing';

describe('custom-carousel', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<custom-carousel></custom-carousel>');

    const element = await page.find('custom-carousel');
    expect(element).toHaveClass('hydrated');
  });
});
