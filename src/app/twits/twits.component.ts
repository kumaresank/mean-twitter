import { Component, OnInit } from '@angular/core';
import { TwitsService } from './../twits.service';

@Component({
  selector: 'app-twits',
  templateUrl: './twits.component.html',
  styleUrls: ['./twits.component.css']
})
export class TwitsComponent implements OnInit {
  twits:any;
  q:any;
  meta:any;
  constructor(public twitService: TwitsService) {}

  ngOnInit() { }

  fetchTwits() {
      this.twitService.getTwits('?q='+this.q).subscribe(twits => {
          this.meta = twits.search_metadata;
          this.twits = twits.statuses;
      });
  }

onScroll () {
      this.twitService.getTwits(this.meta.next_results).subscribe(twits => {
          this.meta = twits.search_metadata;
          this.twits = this.twits.concat(twits.statuses);
      });  
    }
}
