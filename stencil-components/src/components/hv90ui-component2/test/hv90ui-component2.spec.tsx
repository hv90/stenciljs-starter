import { newSpecPage } from '@stencil/core/testing';
import { Hv90uiComponent2 } from '../hv90ui-component2';

describe('hv90ui-component2', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Hv90uiComponent2],
      html: `<hv90ui-component2></hv90ui-component2>`,
    });
    expect(page.root).toEqualHtml(`
      <hv90ui-component2>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </hv90ui-component2>
    `);
  });
});
