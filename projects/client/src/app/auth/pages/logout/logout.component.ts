import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../store/services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-logout",
  template: `
    {{ "RAPI.PIECE.AUTH.LABELS.LOGING_OUT" | translate }}...
  `,
  styles: []
})
export class LogoutComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.logout().subscribe(res => {
      this.router.navigate([""]);
    });
  }
}
