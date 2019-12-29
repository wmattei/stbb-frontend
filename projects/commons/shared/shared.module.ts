import { CommonModule } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatBadgeModule, MatButtonModule, MatDividerModule, MatFormFieldModule, MatIconModule, MatListModule, MatProgressBarModule, MatSidenavModule, MatToolbarModule, MatInputModule, MatCardModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { TextMaskModule } from 'angular2-text-mask';
import { NavigationService } from '../core/layout/services/navigation.service';
import { NavigationPwaComponent } from '../../client/src/app/layout/navigation/navigation.component';


@NgModule({
    declarations: [NavigationPwaComponent],
    imports: [
        CommonModule,
        FlexLayoutModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        TextMaskModule,

        // Material
        MatProgressBarModule,
        MatIconModule,
        MatFormFieldModule,
        MatDividerModule,
        MatToolbarModule,
        MatListModule,
        MatSidenavModule,
        MatBadgeModule,
        MatButtonModule,
        MatInputModule,
        MatCardModule
    ],
    exports: [
        CommonModule,
        FlexLayoutModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,

        TextMaskModule,

        // Material
        MatProgressBarModule,
        MatIconModule,
        MatFormFieldModule,
        MatDividerModule,
        MatToolbarModule,
        MatListModule,
        MatSidenavModule,
        MatBadgeModule,
        MatButtonModule,
        MatInputModule,
        MatCardModule,
        
        // Components
        NavigationPwaComponent
    ],

    providers: [NavigationService, { provide: LOCALE_ID, useValue: 'pt-BR' }],
})
export class SharedModule {}
