import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../../../commons/core/layout/services/navigation.service';
import { AuthState } from '../auth/store/auth.reducer';
import { Store } from '@ngrx/store';
import { loadCurrentUser } from '../auth/store/auth.actions';
import { getCurrentUser } from '../auth/store/auth.selector';

@Component({
    selector: 'app-site',
    templateUrl: './site.component.html', 
    styleUrls: ['./site.component.scss'],
})
export class SiteComponent implements OnInit {
    constructor(
        private navigationService: NavigationService,
        private store: Store<AuthState>
    ) {}

    ngOnInit() {
        this.navigationService.showToolbar();
        this.navigationService.togleShowMenu(false);
        console.log('load')
        this.store.dispatch(loadCurrentUser({}));
        
        this.store.select(getCurrentUser).subscribe(user => {
            if (user){
                this.navigationService.togleShowMenu(true)
            }
        })
    }
}
