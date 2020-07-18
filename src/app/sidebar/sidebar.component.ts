import { Component, OnInit } from '@angular/core';
import {DocService} from '../doc.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private docservice: DocService) { }

  ngOnInit(): void {
  }

}
