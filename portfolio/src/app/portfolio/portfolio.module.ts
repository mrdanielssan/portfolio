import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PortfolioComponent } from './portfolio.component';

import {PortfolioService} from './portfolio.service';
import { MainComponent } from './pages/main/main.component';
import { SocialComponent } from './components/social/social.component';
import {MatIconModule} from '@angular/material/icon';
import { NavigationComponent } from './components/navigation/navigation.component';

const COMPONENTS = [
  PortfolioComponent,
  MainComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    SocialComponent,
    NavigationComponent
  ],
    imports: [
        CommonModule,
        RouterModule,
        MatIconModule
    ],
  exports: [
    ...COMPONENTS
  ],
  providers: [
    PortfolioService
  ]
})
export class PortfolioModule { }

