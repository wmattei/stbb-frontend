import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NavigationService } from '../../../../../commons/core/layout/services/navigation.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit, OnDestroy {
    public form = new FormGroup({
        first_name: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl(''),
        password_confirmation: new FormControl(''),
    });
    user$: Observable<any>;

    constructor(
        private navigationService: NavigationService,
    ) {}

    ngOnInit() {
        this.navigationService.setTitle('Meu Perfil');
        this.navigationService.hideToolbar();
        // this.user$ = this.meService.me().pipe(
        //     tap(user => {
        //         // this.form.patchValue({
        //         //     first_name: user.first_name,
        //         //     email: user.email,
        //         // });

        //         // this.metaService
        //         //   .search({
        //         //     meta_key: "user_preferences",
        //         //     owner_id: user.id
        //         //   })
        //         //   .subscribe(res => {
        //         //     const meta: any = res ? res[0] : {};
        //         //     this.userPreferences = meta || {meta_value: {
        //         //       language: navigator.language
        //         //     }};
        //         //   });
        //     })
        // );
    }

    save() {
        if (this.form.invalid) return;

        // this.storageService.set("selected_lang", this.selectedLang);
        // this.meService.update(this.form.value).subscribe(res => {
        //     // if (this.userPreferences.meta_key){
        //     //   this.metaService.update(this.userPreferences, id)
        //     // }
        //     this.router.navigate(['/']);
        // });
    }

    openDrawer() {
        this.navigationService.togleDrawer();
    }

    ngOnDestroy() {
        this.navigationService.showToolbar();
        this.navigationService.setTitle('STBB');
    }
}
