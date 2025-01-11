import { newE2EPage } from '@stencil/core/testing';

describe('hv90ui-component2', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hv90ui-component2></hv90ui-component2>');

    const element = await page.find('hv90ui-component2');
    expect(element).toHaveClass('hydrated');
  });
});
