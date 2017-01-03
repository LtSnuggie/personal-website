import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
//import {MobileService} from '../components/services/service';

@Component({
  selector: 'login',
  styleUrls: ['./login.css'],
  templateUrl: './login.html'
})
//export class Login extends MobileService {
export class Login {
    
    username: string;
    password: string;
    invalid : boolean;
    f : NgForm;
    attemptMap = {};
    lockout: boolean;
    
//    constructor(private mobileService: MobileService){
    constructor(){
//        super(mobileService.ngZone);
//        this.username = 'username';
//        this.password = 'password';
    };
    login = function(f: NgForm, callback) {
//        console.log(f.value); 
//        console.log(f.valid); 
        if(!this.lockout){
            if(f.valid && this.checkCredentials(f.value.username, f.value.password)){
                this.username = f.value.username;
                this.password = f.value.password;
            } else {
                var val = this.attemptMap[f.value.username];
                (val) ? this.attemptMap[f.value.username] = val + 1 : this.attemptMap[f.value.username] = 1;
                if(this.attemptMap[f.value.username] > 3) {
                    this.lockout = true;    
                    alert('Too many attempts, please wait 5 minutes.');
                }
                f.resetForm();
            }
            return f;
        }
    }
    checkCredentials = function(u,p) {
        return (u == 'admin' && p == 'pass');
    }
}
