import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'hv90ui-component2',
  styleUrl: 'hv90ui-component2.css',
  shadow: true,
})
export class Hv90uiComponent2 {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
