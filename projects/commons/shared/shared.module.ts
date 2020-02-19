import { CommonModule } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    MatBadgeModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatToolbarModule,
    MatDialogModule,
} from '@angular/material';
import { RouterModule } from '@angular/router';
import { TextMaskModule } from 'angular2-text-mask';
import { NavigationPwaComponent } from '../../client/src/app/layout/navigation/navigation.component';
import { NavigationService } from '../core/layout/services/navigation.service';
import { ImageViewerComponent } from './components/image-viewer.component';
import { ImageCropperComponent } from './components/image-cropper.component';
import { AngularCropperjsModule } from 'angular-cropperjs';
import { UploadService } from './services/upload.service';

@NgModule({
    declarations: [
        NavigationPwaComponent,
        ImageViewerComponent,
        ImageCropperComponent,
    ],
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
        MatCardModule,
        MatDialogModule,
        AngularCropperjsModule,
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
        MatDialogModule,
        AngularCropperjsModule,

        // Components
        NavigationPwaComponent,
        ImageViewerComponent,
        ImageCropperComponent,
    ],
    entryComponents: [ImageViewerComponent, ImageCropperComponent],
    providers: [
        NavigationService,
        { provide: LOCALE_ID, useValue: 'pt-BR' },
        UploadService,
    ],
})
export class SharedModule {}
