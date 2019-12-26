import { Component, OnInit } from "@angular/core";
import { slideInAnimation } from "projects/commons/shared/animations/animations-routes";
import { NavigationService } from "../../../../commons/core/layout/services/navigation.service";

@Component({
  selector: "app-modules",
  templateUrl: "./modules.component.html",
  styleUrls: ["./modules.component.scss"],
  animations: [slideInAnimation]
})
export class ModulesComponent implements OnInit {
  constructor(private navigationService: NavigationService) {}

  ngOnInit() {
    this.navigationService.showToolbar();
  }

  get title() {
    return this.navigationService.getTitle();
  }
}
