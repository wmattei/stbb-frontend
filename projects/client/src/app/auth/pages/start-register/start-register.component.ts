import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthApiService } from '../../store/auth-api.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-start-register',
    templateUrl: './start-register.component.html',
    styleUrls: ['./start-register.component.scss'],
})
export class StartRegisterComponent implements OnInit {
   
    public form = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        document: new FormControl('', [Validators.required]),
        name: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required]),
        passwordConfirmation: new FormControl('', [Validators.required]),
    })
    
    constructor(private authService: AuthApiService, private router: Router) {}

    ngOnInit() {}
    
    save(){
        if (this.form.invalid) return;
        this.authService.startRegister(this.form.value).subscribe(res => {
            this.router.navigate(['/portal'])
        })
    }
}
