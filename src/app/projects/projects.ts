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
        '{{ JSON Utility }}' : 'A utility for easily visualizing, manipulating, and querying for JSON content the REST calls',
        'test1' : 'This is just test content',
        'test2' : 'This is just test content',
        'test3' : 'This is just test content',
    }
    showContent(project){
        this.highlighted = project;
        this.content = this.projectContent[project];
    }
}
