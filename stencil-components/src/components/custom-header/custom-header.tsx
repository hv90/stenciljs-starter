import { Component, Host, Prop, h } from '@stencil/core';

import '@shoelace-style/shoelace/dist/components/avatar/avatar.js';
import '@shoelace-style/shoelace/dist/themes/light.css';

@Component({
  tag: 'custom-header',
  assetsDirs: ['../../../node_modules/@shoelace-style/shoelace/dist/shoelace.js'],
  styleUrls: ['../../tailwind.css', '../../tailwindVariables.css', 'custom-header.css' /* '../../../node_modules/@shoelace-style/shoelace/dist/themes/light.css' */],
  shadow: true,
})
export class CustomHeader {
  @Prop() class?: string;

  render() {
    return (
      <Host>
        <header class={this.class}>
          <slot></slot>
        </header>
      </Host>
    );
  }
}
