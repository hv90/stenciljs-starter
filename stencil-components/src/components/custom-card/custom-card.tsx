import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'custom-card',
  styleUrls: ['custom-card.css', '../../tailwind.css', '../../tailwindVariables.css'],
  shadow: true,
})
export class CustomCard {
  render() {
    return (
      <Host>
        <div class="bg-white/30 backdrop-blur-lg border border-white/10 shadow-lg rounded-xl p-6">
          <h2 class="text-black text-xl font-bold">Glass Effect Card</h2>
          <p class="text-black/80">Este é um exemplo de card com efeito de vidro utilizando Tailwind CSS.</p>
        </div>
        <slot></slot>
      </Host>
    );
  }
}
