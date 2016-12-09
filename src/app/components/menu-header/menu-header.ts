import {Component, EventEmitter, Output, Input} from '@angular/core';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'menu-header',
  styleUrls: ['./menu-header.css'],
  templateUrl: './menu-header.html'
})
export class MenuHeader {
        
    @Output() result = new EventEmitter<boolean>();
    @Input() menuSelected: boolean;
    
//    menuSelected = false;
    menuClicked() {
        this.menuSelected = !this.menuSelected;
        this.result.emit(this.menuSelected);
    }
    
    
    
    
    
    
    
    
    text = "Custom Text";
    seg = 1;
    x1 = 0;
    x2 = 0;
    y1 = 0;
    y2 = 0;
    
    clicked = function(){alert()};
    myRadius = 5;
    ngOnInit(){
        let timer = Observable.timer(0,100);
        timer.subscribe(t=> {
            this.resize(t);
        });
        
    }
    resize = function(ticks) {
        switch(this.seg){
            case 1 :
                this.x1 = 25;
                this.y1 = 50;
                this.x2 = 37.5;
                this.y2 = 28.35;
                this.seg++;
                break;
            case 2 :
                this.x1 = 37.5;
                this.y1 = 28.35;
                this.x2 = 62.5;
                this.y2 = 28.35;
                this.seg++;
                break;
            case 3 :
                this.x1 = 62.5;
                this.y1 = 28.35;
                this.x2 = 75;
                this.y2 = 50;
                this.seg++;
                break;
            case 4 :
                this.x1 = 75;
                this.y1 = 50;
                this.x2 = 62.5;
                this.y2 = 71.65;
                this.seg++;
                break;
            case 5 :
                this.x1 = 62.5;
                this.y1 = 71.65;
                this.x2 = 37.5;
                this.y2 = 71.65;
                this.seg++;
                break;
            case 6 :
                this.x1 = 37.5;
                this.y1 = 71.65;
                this.x2 = 25;
                this.y2 = 50;
                this.seg = 1;
                break;
        }
    }
}
