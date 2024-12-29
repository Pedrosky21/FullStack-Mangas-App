import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioPageComponent } from './pages/inicio-page/inicio-page.component';

import { SharedModule } from '../../shared/shared.module';
import { AboutMeComponent } from './components/about-me/about-me.component';

@NgModule({
  declarations: [
    InicioPageComponent,
    AboutMeComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    SharedModule
  ]
})
export class InicioModule { }
