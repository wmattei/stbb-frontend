import { CommonModule } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
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
