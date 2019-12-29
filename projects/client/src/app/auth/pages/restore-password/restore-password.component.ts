import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthApiService } from '../../store/auth-api.service';

@Component({
  selector: "app-restore-password",
  templateUrl: "./restore-password.component.html"
})
export class RestorePasswordComponent implements OnInit {
  public formGroup: FormGroup = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email])
  });

  constructor(
    private authService: AuthApiService,
    private router: Router
  ) {}

  ngOnInit() {}

  get email() {
    return this.formGroup.get("email") as FormControl;
  }

  submit() {
    if (this.formGroup.invalid) return;

    // this.authService.remind(this.formGroup.value).subscribe(res => {
    //   this.router.navigate(["/auth/login"]);
    // });
  }
}
