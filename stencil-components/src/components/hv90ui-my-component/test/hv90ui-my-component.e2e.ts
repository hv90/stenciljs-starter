import { newE2EPage } from '@stencil/core/testing';

describe('hv90ui-my-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hv90ui-my-component></hv90ui-my-component>');

    const element = await page.find('hv90ui-my-component');
    expect(element).toHaveClass('hydrated');
  });
});
