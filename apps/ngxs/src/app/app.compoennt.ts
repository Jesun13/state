import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StepperComponent } from '@state/libs';

@Component({
  imports: [RouterModule, StepperComponent],
  selector: 'ngxs-root',
  template: `
    <div class="stepper"><lib-stepper [steps]="steps"></lib-stepper></div>
    <div class="content">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [
    `
      .stepper {
        width: 300px;
      }
      .content {
        border: 1px solid red;
        padding: 20px;
        width: 100%;
        height: 100%;
        border-radius: 40px;
      }
      :host {
        display: flex;
        gap: 20px;
        height: 100%;
      }
    `,
  ],
})
export class AppComponent {
  steps = [
    {
      name: 'Step 1',
      link: '/step1',
    },
    {
      name: 'Step 2',
      link: '/step1',
    },
  ];
}
