import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'user-info',
    templateUrl: 'user.component.html',
    styleUrls: ['user.component.css']
})
export class UserComponent implements OnInit {
    userName = 'weijq';
    constructor() { }

    ngOnInit() {

    }
}