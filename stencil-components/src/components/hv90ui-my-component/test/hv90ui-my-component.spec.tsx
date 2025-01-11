import { newSpecPage } from '@stencil/core/testing';
import { Hv90uiMyComponent } from '../hv90ui-my-component';

describe('hv90ui-my-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Hv90uiMyComponent],
      html: `<hv90ui-my-component></hv90ui-my-component>`,
    });
    expect(page.root).toEqualHtml(`
      <hv90ui-my-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </hv90ui-my-component>
    `);
  });
});
