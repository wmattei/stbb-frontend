import { Location } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import {
    matExpansionAnimations,
    MatExpansionPanelState,
    MatSidenav,
} from '@angular/material';
import { environment } from '@env/environment';
import { Store } from '@ngrx/store';
import {
    NavigationOptions,
    ToolbarOptionsButton,
} from 'projects/commons/core/layout/models/navigation';
import { NavigationService } from 'projects/commons/core/layout/services/navigation.service';
import { flyIn } from 'projects/commons/shared/animations/fly-in';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthState } from '../../auth/store/auth.reducer';
import { getCurrentUser } from '../../auth/store/auth.selector';

@Component({
    selector: 'pwa-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
    animations: [
        flyIn,
        matExpansionAnimations.bodyExpansion,
        matExpansionAnimations.indicatorRotate,
    ],
})
export class NavigationPwaComponent implements OnInit {
    navigationOptions$: BehaviorSubject<NavigationOptions>;

    public MENU: ToolbarOptionsButton = ToolbarOptionsButton.MENU;
    public BACK: ToolbarOptionsButton = ToolbarOptionsButton.BACK;
    public MORE: ToolbarOptionsButton = ToolbarOptionsButton.MORE;
    public SEARCH: ToolbarOptionsButton = ToolbarOptionsButton.SEARCH;

    @ViewChild('drawer', { static: true })
    private drawer: MatSidenav;

    user$: Observable<any>;

    notificationsCount$: Observable<number>;

    constructor(
        private navigationService: NavigationService,
        public location: Location,
        private store: Store<AuthState>
    ) {}

    ngOnInit() {
        this.navigationOptions$ = this.navigationService.getNavigationOptions();

        this.navigationService.setNavigationOptions({
            ...this.navigationOptions$.value,
            sidenav: {
                ...this.navigationOptions$.value.sidenav,
                menuItens: [
                    {
                        icon: 'home',
                        iconColor: '#232323',
                        label: 'Início',
                        type: 'button',
                        link: '/',
                        open: true,
                    },
                    {
                        icon: 'exit_to_app',
                        iconColor: '#232323',
                        label: 'Logout',
                        type: 'button',
                        link: '/auth/logout',
                        open: true,
                    },
                ],
            },
        });

        this.navigationService.getDrawerEmitter().subscribe(() => {
            this.drawer.toggle();
        });

        this.user$ = this.store.select(getCurrentUser);
    }

    public get title() {
        return this.navigationService.getTitle();
    }

    public get version() {
        return environment.version;
    }

    getExpandedState(menuGroup): MatExpansionPanelState {
        return menuGroup.open ? 'expanded' : 'collapsed';
    }
}
