import { Component } from '@angular/core';

@Component({
  selector: 'app-one-column-layout',
  template: `
    <nb-layout windowMode>
      <nb-layout-column class="p-1">
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>
    </nb-layout>
  `,
})
export class OneColumnLayoutComponent {}
