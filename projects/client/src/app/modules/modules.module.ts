import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'projects/commons/shared/shared.module';
import { ModulesComponent } from './modules.component';
import { routes } from './modules.routing';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
    declarations: [ModulesComponent, ProfileComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule,
    ],
    providers: [],
})
export class ModulesModule {}
