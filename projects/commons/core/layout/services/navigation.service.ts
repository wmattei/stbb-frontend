import { Injectable, EventEmitter } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { BehaviorSubject, Observable } from "rxjs";
import {
  NavigationOptions,
  ToolbarOptionsButton
} from "../models/navigation";

@Injectable()
export class NavigationService {
  private navigationOptions: BehaviorSubject<
    NavigationOptions
  > = new BehaviorSubject({
      toolbar: {},
      sidenav: {},
      footer: {}
  });
  private loading$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  private drawerEmitter: EventEmitter<any> = new EventEmitter();
  private notificationDrawerEmitter: BehaviorSubject<any> = new BehaviorSubject(
    false
  );

  constructor(private titleService: Title) {}

  public setTitle(title: string) {
    this.titleService.setTitle(title);
  }

  public getTitle() {
    return this.titleService.getTitle();
  }

  setNavigationOptions(opt: NavigationOptions) {
    this.navigationOptions.next(opt);
  }

  getNavigationOptions() {
    return this.navigationOptions;
  }

  navigationOptionsObservable() {
    return this.navigationOptions.subscribe(res => console.log(res));
  }

  togleShowMenu(showMenu: boolean) {
    const newvalue = this.navigationOptions.value;
    newvalue.toolbar.showMenu = showMenu;
    this.navigationOptions.next(newvalue);
  }

  public togleDrawer() {
    this.drawerEmitter.emit();
  }

  public togleNotificationDrawer() {
    this.notificationDrawerEmitter.next(true);
  }

  public getDrawerEmitter() {
    return this.drawerEmitter;
  }

  public getNotificationDrawerEmitter() {
    return this.notificationDrawerEmitter;
  }

  public hideToolbar() {
    let newValue = this.navigationOptions.value;
    if (newValue.toolbar.showToolbar) {
      newValue.toolbar.showToolbar = false;
      this.navigationOptions.next(newValue);
    }
  }

  public showToolbar(
    bgColor: string = this.navigationOptions.value.toolbar.backgroundColor,
    tColor: string = this.navigationOptions.value.toolbar.color
  ) {
    let newValue = this.navigationOptions.value;
    newValue.toolbar.showToolbar = true;
    newValue.toolbar.backgroundColor = bgColor;
    newValue.toolbar.color = tColor;
    this.navigationOptions.next(newValue);
  }

  public getLoading(): Observable<boolean> {
    return this.loading$.asObservable();
  }

  public showLoading() {
    this.loading$.next(true);
  }

  public hideLoading() {
    this.loading$.next(false);
  }
}
