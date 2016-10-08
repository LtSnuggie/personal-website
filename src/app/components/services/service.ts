import {Injectable, NgZone} from '@angular/core';

@Injectable()
export class MobileService {         
    isMobile = false;
    setMobile() {
        this.isMobile = (window.innerWidth < 650 || window.innerHeight < 650);
    }
    constructor(public ngZone:NgZone) {
        window.onresize = (e) =>
        {
            ngZone.run(() => {
                this.setMobile();
            });
        };
        this.setMobile();
    }
}