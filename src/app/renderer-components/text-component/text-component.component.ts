import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-text-component',
  templateUrl: './text-component.component.html',
  styleUrls: ['./text-component.component.scss']
})
export class TextComponentComponent implements OnInit {
@Input () text="text holder";
  constructor() { }

  ngOnInit(): void {
  }

}
