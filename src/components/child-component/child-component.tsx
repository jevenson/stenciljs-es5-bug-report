import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-child-component',
  styleUrl: 'child-component.css',
  shadow: false
})
export class ChildComponent {

  render() {
    return <h1>I'm rendered by the child component.</h1>;
  }
}
