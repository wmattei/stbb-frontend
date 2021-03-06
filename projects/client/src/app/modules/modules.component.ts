import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from 'projects/commons/shared/animations/animations-routes';
import { NavigationService } from '../../../../commons/core/layout/services/navigation.service';
import { AuthState } from '../auth/store/auth.reducer';
import { Store } from '@ngrx/store';
import { loadCurrentUser } from '../auth/store/auth.actions';

@Component({
    selector: 'app-modules',
    templateUrl: './modules.component.html',
    styleUrls: ['./modules.component.scss'],
    animations: [slideInAnimation],
})
export class ModulesComponent implements OnInit {
    constructor(
        private navigationService: NavigationService,
        private store: Store<AuthState>
    ) {}

    ngOnInit() {
        console.log('load')
        this.store.dispatch(loadCurrentUser({}));
        this.navigationService.showToolbar();
        this.navigationService.togleShowMenu(true);
    }

    get title() {
        return this.navigationService.getTitle();
    }
}
