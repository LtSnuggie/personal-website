import {Component} from '@angular/core';
import {MobileService} from '../components/services/service';

@Component({
  selector: 'bio',
  styleUrls: ['./bio.css'],
  templateUrl: './bio.html'
})
export class Bio extends MobileService {
        
    constructor(private mobileService: MobileService){
        super(mobileService.ngZone);
    };
}
