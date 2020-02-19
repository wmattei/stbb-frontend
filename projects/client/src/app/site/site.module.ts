import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteComponent } from './site.component';
import { RouterModule } from '@angular/router';
import { siteRoutes } from './site.routes';
import { SharedModule } from '../../../../commons/shared/shared.module';

@NgModule({
  declarations: [SiteComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(siteRoutes),
    SharedModule
  ]
})
export class SiteModule {}
