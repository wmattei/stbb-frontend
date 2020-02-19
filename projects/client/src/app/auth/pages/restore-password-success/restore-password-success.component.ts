import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthApiService } from '../../store/auth-api.service';

@Component({
    selector: 'app-restore-password-success',
    templateUrl: './restore-password-success.component.html',
    styleUrls: ['./restore-password-success.component.scss'],
})
export class RestorePasswordSuccessComponent implements OnInit {
    public email: string;

    constructor(
        private route: ActivatedRoute,
        private authService: AuthApiService
    ) {}

    ngOnInit() {
        this.email = this.route.snapshot.queryParams.email;
    }

    resend() {
        this.authService
            .restorePassword({ email: this.email })
            .subscribe(res => {
                location.reload();
            });
    }
}
