import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthApiService } from '../../store/auth-api.service';

@Component({
    selector: 'app-reset-password',
    templateUrl: './reset-password.component.html',
    styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
    public form = new FormGroup({
        password: new FormControl('', Validators.required),
        passwordConfirmation: new FormControl('', Validators.required),
    });

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private authService: AuthApiService
    ) {}

    ngOnInit() {}

    save() {
        if (this.form.invalid) return;
        this.authService
            .resetPassword({
                ...this.form.value,
                token: this.route.snapshot.params.token,
            })
            .subscribe(res => {
                this.router.navigate(['/auth/login']);
            });
    }
}
