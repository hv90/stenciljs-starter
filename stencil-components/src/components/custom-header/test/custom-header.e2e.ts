import { newE2EPage } from '@stencil/core/testing';

describe('custom-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<custom-header></custom-header>');

    const element = await page.find('custom-header');
    expect(element).toHaveClass('hydrated');
  });
});
