import {Component} from '@angular/core';
import {MobileService} from './components/services/service';
import {MenuHeader} from './components/menu-header/menu-header';

@Component({
  selector   : 'app-root',
  templateUrl: './app.component.html',
  providers : [MobileService],
})
export class AppComponent extends MobileService {
    constructor(private mobileService: MobileService){
        super(mobileService.ngZone);
    };
    
    showMenu = false;
    
    ngOnChange(val: boolean) {
        this.showMenu = val;
    }
}
