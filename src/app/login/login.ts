import {Component} from '@angular/core';
import {MobileService} from '../components/services/service';

@Component({
  selector: 'login',
  styleUrls: ['./login.css'],
  templateUrl: './login.html'
})
export class Login extends MobileService {
        
    constructor(private mobileService: MobileService){
        super(mobileService.ngZone);
    };
}
