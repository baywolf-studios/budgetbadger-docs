import { Component, OnInit } from '@angular/core';
import {DocService} from '../doc.service';
import { Doc } from 'src/doc';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  docs: Doc[];

  constructor(private docService: DocService) { }

  ngOnInit(): void {
    console.log('TEST');
    this.getDocs();
  }

  getDocs(): void {
    this.docService.getDocs().subscribe(docs => this.docs = docs);
  }

}
