import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NavigationService } from 'projects/commons/core/layout/services/navigation.service';
import { AuthApiService } from '../../store/auth-api.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    public formGroup: FormGroup = new FormGroup({
        email: new FormControl(''),
        password: new FormControl(''),
    });

    constructor(
        private authService: AuthApiService,
        private router: Router,
        private navigationService: NavigationService,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {}

    get email() {
        return this.formGroup.get('email') as FormControl;
    }

    get password() {
        return this.formGroup.get('password') as FormControl;
    }

    login() {
        if (this.formGroup.invalid) return;
        this.navigationService.showLoading();
        this.authService
            .login(this.email.value, this.password.value)
            .subscribe(res => {
                this.navigationService.hideLoading();
                const redirectUrl = this.route.snapshot.queryParams.redirectUrl;
                this.router.navigate([redirectUrl || '/portal']);
            });
    }
}
