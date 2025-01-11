import { newE2EPage } from '@stencil/core/testing';

describe('custom-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<custom-card></custom-card>');

    const element = await page.find('custom-card');
    expect(element).toHaveClass('hydrated');
  });
});
