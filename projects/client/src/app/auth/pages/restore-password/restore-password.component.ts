import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from "../../store/services/auth.service";
import { W3NotificationService } from "@dploy-team/rapi-w3";
import { Router } from "@angular/router";

@Component({
  selector: "app-restore-password",
  templateUrl: "./restore-password.component.html"
})
export class RestorePasswordComponent implements OnInit {
  public formGroup: FormGroup = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email])
  });

  constructor(
    private authService: AuthService,
    private notificationService: W3NotificationService,
    private router: Router
  ) {}

  ngOnInit() {}

  get email() {
    return this.formGroup.get("email") as FormControl;
  }

  submit() {
    if (this.formGroup.invalid) return;

    this.authService.remind(this.formGroup.value).subscribe(res => {
      this.router.navigate(["/auth/login"]);
    });
  }
}
