import { Component, OnInit } from '@angular/core';
import {SourceService} from 'src/app/source/source.service';

@Component({
  selector: 'app-refresh',
  templateUrl: './refresh.component.html',
  styleUrls: ['./refresh.component.css']
})
export class RefreshComponent implements OnInit {

  constructor(private sourceService: SourceService) { }

  ngOnInit() {}

  refresh() {
    this.sourceService.refresh().subscribe(data => {
      console.info(data);
    });
  }

}
