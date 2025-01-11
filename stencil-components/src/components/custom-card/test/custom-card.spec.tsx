import { newSpecPage } from '@stencil/core/testing';
import { CustomCard } from '../custom-card';

describe('custom-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CustomCard],
      html: `<custom-card></custom-card>`,
    });
    expect(page.root).toEqualHtml(`
      <custom-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </custom-card>
    `);
  });
});
