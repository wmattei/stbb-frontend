import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../../store/services/auth.service";
import { environment } from "@env/environment.prod";
import { NavigationService } from "projects/commons/core/layout/services/navigation.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  public formGroup: FormGroup = new FormGroup({
    email: new FormControl("", [Validators.email]),
    password: new FormControl("")
  });

  constructor(
    private authService: AuthService,
    private router: Router,
    private navigationService: NavigationService
  ) {}

  ngOnInit() {}

  get email() {
    return this.formGroup.get("email") as FormControl;
  }

  get password() {
    return this.formGroup.get("password") as FormControl;
  }

  login() {
    if (this.formGroup.invalid) return;
    this.navigationService.showLoading();
    this.authService
      .login(this.email.value, this.password.value)
      .subscribe(res => {
        this.navigationService.hideLoading();
        this.router.navigate(["/"]);
      });
  }

  loginWithGoogle() {
    window.open(
      `${environment.URL_APP}/auth/login/google?redirect=${environment.URL_APP}/`
    );
  }
  loginWithFacebook() {
    window.open(
      `${environment.URL_APP}/auth/login/facebook?redirect=${environment.URL_APP}/`
    );
  }
}
