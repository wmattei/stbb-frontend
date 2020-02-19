import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { CropperComponent } from 'angular-cropperjs';
import { UploadService } from '../services/upload.service';

@Component({
    selector: 'image-cropper',
    template: `
        <div>
            <mat-dialog-content>
                <angular-cropper
                    #cropper
                    [cropperOptions]="config"
                    [imageUrl]="image"
                ></angular-cropper>
            </mat-dialog-content>
            <mat-dialog-actions class="p-12">
                <div class="mb-20" fxLayoutGap="20px">
                    <button matDialogClose mat-stroked-button color="warn">
                        <b>CANCELAR</b>
                    </button>
                    <button (click)="save()" mat-flat-button color="primary">
                        <b>OK</b>
                    </button>
                </div>
            </mat-dialog-actions>
        </div>
    `,
    styles: [
        `
            ::ng-deep img {
                max-height: 500px !important;
            }
        `,
    ],
})
export class ImageCropperComponent implements OnInit {
    public image: any;
    public config = {
        dragMode: 'move',
        movable: true,
        rotatable: true,
        zoomable: true,
        zoomOnWheel: true,
        zoomOnTouch: true,
        scalable: true,
        responsive: true,
        viewMode: 3,
        autoCropArea: 0.8,
        highlight: true,
        background: true,
        data: {
            width: 300,
            height: 300,
        },
        cropBoxMovable: true,
        cropBoxResizable: true,
    };

    @ViewChild(CropperComponent, { static: true })
    private cropper: CropperComponent;

    constructor(
        @Inject(MAT_DIALOG_DATA) public event,
        private dialogRef: MatDialogRef<CropperComponent>,
        private uploadService: UploadService
    ) {}

    ngOnInit() {
        const reader = new FileReader();
        reader.onload = (event: any) => {
            this.image = event.target.result;
        };

        reader.readAsDataURL(this.event.target.files[0]);
    }

    save() {
        const croppData = this.cropper.cropper.getData(true);
        const data = this.uploadService.buildFormData(
            this.event.target.files[0],
            {
                gallery: 'avatar',
                x: croppData.x,
                y: croppData.y,
                width: croppData.width,
                height: croppData.height,
                rotate: croppData.rotate,
            }
        );
        this.uploadService.upload(data).subscribe(res => {
            // this.dialogRef.close({
            //     croppData,
            //     originalFile: this.event.target.files[0],
            //     originalImage: this.image,
            //     croppedImage: this.cropper.cropper.getCroppedCanvas()
            // })
            console.log(res);
        });
    }
}
