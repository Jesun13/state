import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibButtonComponent } from '@state/libs';

@Component({
  selector: 'app-nx-welcome',
  imports: [CommonModule, LibButtonComponent],
  template: ` <lib-button>Привет</lib-button> `,
  styles: [],
})
export class NxWelcomeComponent {}
