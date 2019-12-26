import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { NavigationService } from "projects/commons/core/layout/services/navigation.service";
import { TranslateService } from "@ngx-translate/core";
import { W3StorageService } from "@dploy-team/rapi-w3";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  loading$: Observable<boolean>;

  constructor(
    private navigationService: NavigationService,
    private translate: TranslateService,
    private storage: W3StorageService
  ) {
    this.loading$ = navigationService.getLoading();

    //TODO pegar das preferencias do usuario
    translate.setDefaultLang(
      storage.get("selected_lang") || navigator.language
    );
  }

  ngOnInit() {}
}
