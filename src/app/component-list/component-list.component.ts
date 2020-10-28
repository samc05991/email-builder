import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-list',
  templateUrl: './component-list.component.html',
  styleUrls: ['./component-list.component.scss']
})
export class ComponentListComponent implements OnInit {

  componentList:any=[
    {
      name:"image",
      icon:"fa-toolbox",
    }, 
    {
      name:"header",
      icon:"fa-user"
    },
    {
      name:"Container",
      icon:"fa-box"
    },
    {
      name:"Footer",
      icon:"fa-shoe-prints",
    },
    {
      name:"Text",
      icon:"fa-text-width",
    },
    {
      name:"heading",
      icon:"fa-heading",
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
