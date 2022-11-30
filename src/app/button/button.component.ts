import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  // Add the NgClass directive and pass the correct class-names based on values of the component's properties.
  template: `<button>Hello</button>`,
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() color?: 'primary' | 'secondary';
  @Input() warn?: boolean;
}
