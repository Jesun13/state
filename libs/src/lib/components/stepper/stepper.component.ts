import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TuiConnected, TuiStep, TuiStepperComponent } from '@taiga-ui/kit';
import { IStep } from './models/interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'lib-stepper',
  imports: [TuiStepperComponent, TuiConnected, TuiStep, RouterLink],
  template: `
    <tui-stepper orientation="vertical" tuiConnected [activeItemIndex]="1">
      @for (step of steps();track $index){
      <button tuiStep type="button" [routerLink]="step.link">
        {{ step.name }}
      </button>
      }
    </tui-stepper>
  `,
  styleUrl: './stepper.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepperComponent {
  steps = input.required<IStep[]>();
}
