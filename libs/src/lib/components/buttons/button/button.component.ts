import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiButton } from '@taiga-ui/core';

@Component({
  selector: 'lib-button',
  imports: [TuiButton],
  template: ` <button size="l" tuiButton type="button"><ng-content/></button> `,
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LibButtonComponent {}
