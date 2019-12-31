import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Store } from '@ngrx/store';
import { ImageViewerComponent } from '../../../../../commons/shared/components/image-viewer.component';
import { User } from '../../auth/store/auth.model';
import { AuthState } from '../../auth/store/auth.reducer';
import { getCurrentUser } from '../../auth/store/auth.selector';
import { ImageCropperComponent } from '../../../../../commons/shared/components/image-cropper.component';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
    public form = new FormGroup({
        avatar: new FormControl('', Validators.required),
    });

    user: User;

    constructor(
        private store: Store<AuthState>,
        private matDialog: MatDialog
    ) {}

    ngOnInit() {
        this.store.select(getCurrentUser).subscribe(res => {
            this.user = res;
        });
    }

    save() {
        if (this.form.invalid) return;
    }

    openPhoto() {
        if (this.user.avatar) {
            this.matDialog.open(ImageViewerComponent, {
                data: this.user.avatar,
            });
        }
    }

    openCropper(event) {
        this.matDialog
            .open(ImageCropperComponent, { data: event })
            .afterClosed()
            .subscribe(res => {
                event.target.value = null;
                console.log(res)
                this.user.avatar = res.croppedImage.toDataURL('image/jpg')
            });
    }
}
