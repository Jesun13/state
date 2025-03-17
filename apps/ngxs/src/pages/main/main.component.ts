import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LibButtonComponent } from '@state/libs';

@Component({
  selector: 'ngxs-main',
  imports: [ LibButtonComponent],
  template: ` <lib-button>Тест</lib-button>`,
  styleUrl: './main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {

}
