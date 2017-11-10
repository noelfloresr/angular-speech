import { Component, OnInit } from '@angular/core';

//For routing purposes
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { SpeechService } from '../shared-data/speech.service';
import { Speech } from '../shared-data/speech.model';

@Component({
  selector: 'app-speech-detail',
  templateUrl: './speech-detail.component.html',
  styleUrls: ['./speech-detail.component.sass']
})
export class SpeechDetailComponent implements OnInit {
  //Properties
  speech : Speech; //from speech model
  id: string;
  keywords: string[];

  constructor(
    private speechService: SpeechService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.getItem();
  }

  getItem(){
    this.id = this.route.snapshot.paramMap.get('id');
    this.speechService.getItem(this.id)
        .subscribe((result)=>{
          this.speech = result;
          this.keywords = result.keywords.split(",");
        });
  }

}
