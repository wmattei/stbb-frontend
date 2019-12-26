import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
  getNotificationArr,
  MarkAsRead,
  W3Notification,
  getIsLoading
} from "@dploy-team/rapi-w3";
import { select, Store } from "@ngrx/store";
import { TranslateService } from "@ngx-translate/core";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { NavigationService } from "projects/commons/core/layout/services/navigation.service";

@Component({
  selector: "app-notification",
  templateUrl: "./notification.component.html",
  styleUrls: ["./notification.component.scss"]
})
export class NotificationComponent implements OnInit {
  notifications$: Observable<any>;

  isLoading$: Observable<any>;
  /**
   * Constructor
   */
  constructor(
    private store: Store<any>,
    private router: Router,
    private navigationService: NavigationService,
    private translate: TranslateService
  ) {
    // Set the defaults
  }

  ngOnInit() {
    this.navigationService.setTitle(
      this.translate.instant("MODULES.NOTIFICATION.LABELS.NOTIFICATION")
    );
    this.notifications$ = this.store.pipe(select(getNotificationArr));
    this.isLoading$ = this.store.pipe(
      select(getIsLoading),
      tap(x => console.log(x))
    );

    // this.notifications$ = of([
    //   {
    //     title: "Nova notificação",
    //     message: "Lorem ipsum dolor sit amet rsr",
    //     readed_at: new Date()
    //   },
    //   {
    //     title: "Nova notificação",
    //     message: "Lorem ipsum dolor sit amet rsr",
    //     readed_at: new Date()
    //   },
    //   {
    //     title: "Nova notificação",
    //     message: "Lorem ipsum dolor sit amet rsr",
    //     readed_at: null
    //   }
    // ]);
  }

  markAsRead() {
    this.store.dispatch(new MarkAsRead());
  }

  redirect(notification: W3Notification) {
    this.navigationService.togleNotificationDrawer();
  }
}
