import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LibButtonComponent } from '@state/libs';

@Component({
  selector: 'app-main',
  imports: [LibButtonComponent],
  template: ` <section>STATE MANAGER VIEWER</section> <lib-button>Привет</lib-button> `,
  styleUrl: './main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {}
