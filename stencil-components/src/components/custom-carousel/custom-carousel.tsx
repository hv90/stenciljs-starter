import { Component, Host, h } from '@stencil/core';

import '@shoelace-style/shoelace/dist/components/carousel/carousel.js';
import '@shoelace-style/shoelace/dist/components/carousel-item/carousel-item.js';

@Component({
  tag: 'custom-carousel',
  styleUrls: ['custom-carousel.css', 'light.css', '../../tailwind.css', '../../tailwindVariables.css'],
  shadow: true,
})
export class CustomCarousel {
  render() {
    return (
      <Host class={'flex justify-center w-full h-full'}>
        <sl-carousel class="vertical w-full" pagination orientation="vertical">
          {[<custom-card>1</custom-card>, <custom-card>2</custom-card>, <custom-card>3</custom-card>, <custom-card>4</custom-card>, <custom-card>5</custom-card>].map(child => (
            <sl-carousel-item>{child}</sl-carousel-item>
          ))}
          <div>children props:</div>
          <slot></slot>
        </sl-carousel>
      </Host>
    );
  }
}
