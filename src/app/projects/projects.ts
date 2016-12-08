import {Component} from '@angular/core';

@Component({
  selector: 'projects',
  styleUrls: ['./projects.css'],
  templateUrl: './projects.html'
})
export class Projects {
    public highlighted = ''
    public content = ''
    projectList = ['{{ JSON Utility }}', 'test1', 'test2', 'test3']
    projectContent = {
        '{{ JSON Utility }}' : {
            description : 'A utility for easily visualizing, manipulating, and querying for JSON content the REST calls',
            href : 'google.com'
        },
        'test1' : {
            description : 'This is just test content',
            href : 'google.com'
        },
        'test2' : {
            description : 'This is just test content',
            href : 'google.com'
        },
        'test3' : {
            description : 'This is just test content',
            href : 'google.com'
        },
    }
//    showContent(project){
//        this.highlighted = project;
//        this.content = this.projectContent[project];
//    }
}
