import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-parent-component',
  styleUrl: 'parent-component.css',
  shadow: true
})
export class ParentComponent {

  render() {
    return <my-child-component></my-child-component>;
  }
}
