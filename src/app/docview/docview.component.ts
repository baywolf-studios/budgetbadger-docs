import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocService } from '../doc.service';

@Component({
  selector: 'app-docview',
  templateUrl: './docview.component.html',
  styleUrls: ['./docview.component.css']
})
export class DocviewComponent implements OnInit {

  docJson: string;

  constructor(
    private route: ActivatedRoute,
    private docService: DocService) { }

  ngOnInit(): void {
    const path = this.route.snapshot.paramMap.get('path');
    this.docJson = this.docService.getDocumentSource(path);
  }

}
