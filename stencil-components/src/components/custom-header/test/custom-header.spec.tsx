import { newSpecPage } from '@stencil/core/testing';
import { CustomHeader } from '../custom-header';

describe('custom-header', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CustomHeader],
      html: `<custom-header></custom-header>`,
    });
    expect(page.root).toEqualHtml(`
      <custom-header>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </custom-header>
    `);
  });
});
