import { Location } from "@angular/common";
import { Component, OnInit, ViewChild } from "@angular/core";
import {
  matExpansionAnimations,
  MatExpansionPanelState,
  MatSidenav
} from "@angular/material";
import { Router } from "@angular/router";
import {
  UserModel,
  W3MeService,
  SearchNotifications,
  getNewNotificationsNumber
} from "@dploy-team/rapi-w3";
import { environment } from "@env/environment";
import {
  NavigationOptions,
  ToolbarOptionsButton
} from "projects/commons/core/layout/models/navigation";
import { NavigationService } from "projects/commons/core/layout/services/navigation.service";
import { flyIn } from "projects/commons/shared/animations/fly-in";
import { BehaviorSubject, Observable } from "rxjs";
import { TranslateService } from "@ngx-translate/core";
import { filter, distinctUntilKeyChanged, tap } from "rxjs/operators";
import { BroadcastService } from "projects/admin/src/app/layout/navigation/notification/broadcast.service";
import { Store, select } from "@ngrx/store";

@Component({
  selector: "pwa-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"],
  animations: [
    flyIn,
    matExpansionAnimations.bodyExpansion,
    matExpansionAnimations.indicatorRotate
  ]
})
export class NavigationPwaComponent implements OnInit {
  navigationOptions$: BehaviorSubject<NavigationOptions>;

  public MENU: ToolbarOptionsButton = ToolbarOptionsButton.MENU;
  public BACK: ToolbarOptionsButton = ToolbarOptionsButton.BACK;
  public MORE: ToolbarOptionsButton = ToolbarOptionsButton.MORE;
  public SEARCH: ToolbarOptionsButton = ToolbarOptionsButton.SEARCH;

  @ViewChild("drawer", { static: true })
  private drawer: MatSidenav;

  user$: Observable<any>;

  notificationsCount$: Observable<number>;

  constructor(
    private navigationService: NavigationService,
    public location: Location,
    private meService: W3MeService,
    private router: Router,
    private translateService: TranslateService,
    private store: Store<any>,
    private broadcast: BroadcastService
  ) {}

  ngOnInit() {
    this.navigationOptions$ = this.navigationService.getNavigationOptions();

    this.navigationService.setNavigationOptions({
      ...this.navigationOptions$.value,
      sidenav: {
        ...this.navigationOptions$.value.sidenav,
        menuItens: [
          {
            icon: "home",
            iconColor: "#232323",
            label: this.translate("HOME"),
            type: "button",
            link: "/",
            open: true
          },
          {
            icon: "rss_feed",
            iconColor: "#232323",
            label: this.translate("POSTS"),
            type: "button",
            link: "/posts",
            open: true
          },
          {
            icon: "category",
            iconColor: "#232323",
            label: this.translate("CATEGORIA"),
            type: "button",
            link: "/categorias",
            open: true
          },

          {
            type: "divider"
          },
          {
            type: "label",
            label: this.translate("ADMINISTRATIVO")
          },
          {
            icon: "person",
            iconColor: "#232323",
            label: this.translate("MEU_PERFIL"),
            type: "button",
            link: "/meu-perfil",
            open: true
          }
        ]
      }
    });

    this.navigationService.getDrawerEmitter().subscribe(() => {
      this.drawer.toggle();
    });

    this.notificationsCount$ = this.store.pipe(
      select(getNewNotificationsNumber)
    );

    this.meService.refresh({ include: "roles" });
    this.user$ = this.meService.onChange$.pipe(
      filter(user => !!user),
      distinctUntilKeyChanged("id"),
      tap(user => {
        const params = {
          order: "created_at"
        };

        if (user) {
          this.broadcast.listenerAuthenticated(user.id);
        }

        this.store.dispatch(new SearchNotifications({ params: params }));
      })
    );
  }

  private translate(key) {
    return this.translateService.instant(`NAVIGATION.LABELS.${key}`);
  }

  public get title() {
    return this.navigationService.getTitle();
  }

  public get version() {
    return environment.version;
  }

  getExpandedState(menuGroup): MatExpansionPanelState {
    return menuGroup.open ? "expanded" : "collapsed";
  }
}
