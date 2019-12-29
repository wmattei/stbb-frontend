import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'projects/commons/core/layout/services/navigation.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    loading$: Observable<boolean>;

    constructor(
        navigationService: NavigationService,
    ) {
        this.loading$ = navigationService.getLoading();
    }

    ngOnInit() {}
}
