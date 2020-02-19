import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'image-viewer',
    template: `<img style="min-width: 200px" [src]="img"/>`
})

export class ImageViewerComponent implements OnInit {
    constructor(@Inject(MAT_DIALOG_DATA) public img) { }

    ngOnInit() { }
}