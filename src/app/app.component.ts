import {Component} from '@angular/core';
import {MobileService} from './components/services/service';

@Component({
  selector   : 'app-root',
  templateUrl: './app.component.html',
  providers : [MobileService],
})
export class AppComponent extends MobileService {
    constructor(private mobileService: MobileService){
        super(mobileService.ngZone);
    };
}
