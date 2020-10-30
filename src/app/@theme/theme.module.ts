import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  NbButtonModule,
  NbCardModule,
  NbIconModule,
  NbLayoutModule,
  NbThemeModule,
  NbWindowModule
} from '@nebular/theme';

import {NbEvaIconsModule} from '@nebular/eva-icons';
import {NbSecurityModule} from '@nebular/security';


import {
  OneColumnLayoutComponent,
} from './layouts';
import {AppPageComponent} from './layouts/app-page/app-page.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const NB_MODULES = [
  NbLayoutModule,
  NbSecurityModule,
  NbButtonModule,
  NbCardModule,
  NbLayoutModule,
  NbButtonModule,
  NbIconModule,
  NbEvaIconsModule,
  NbThemeModule,
];
const NEBULAR_FOR_ROOT = [
];

const COMPONENTS = [
  AppPageComponent,
  OneColumnLayoutComponent
];
const PIPES = [];

const COMMON__MODULES = [
  ReactiveFormsModule,
  FormsModule];

const THIRD_PARTY = [
];

@NgModule({
  imports: [
    CommonModule,
    ...NB_MODULES,
    RouterModule,
    ...NEBULAR_FOR_ROOT,
    ...THIRD_PARTY,
    ...COMMON__MODULES
  ],
  exports: [
    CommonModule,
    ...PIPES,
    ...COMPONENTS,
    ...NB_MODULES,
    ...THIRD_PARTY,
    ...COMMON__MODULES,
    ...NEBULAR_FOR_ROOT
  ],
  declarations: [
    ...COMPONENTS,
    ...PIPES
  ],
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders<ThemeModule> {
    return {
      ngModule: ThemeModule,
      providers: [
        ...NbThemeModule.forRoot(
          {
            name: 'corporate',
          },
        ).providers,
      ],
    };
  }
}
