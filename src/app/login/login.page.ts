import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    public user = {login: '', password: ''};

    constructor() {
    }

    ngOnInit() {
    }

    logForm(form) {
        console.log(form);

    }

}
