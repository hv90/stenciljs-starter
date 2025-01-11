import { Component, Host, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'hv90ui-my-component',
  styleUrl: 'hv90ui-my-component.css',
  shadow: true,
})
export class Hv90uiMyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }
  render() {
    return (
      <Host>
        <div>Hello, World! I'm {this.getText()}</div>
        <slot></slot>
      </Host>
    );
  }
}
