import { Component, OnInit } from '@angular/core';
import { SpeechService } from '../shared-data/speech.service';
import { Speech } from '../shared-data/speech.model';

@Component({
  selector: 'app-speech-detail',
  templateUrl: './speech-detail.component.html',
  styleUrls: ['./speech-detail.component.sass']
})
export class SpeechDetailComponent implements OnInit {
  //Properties
  speeches : Speech; //from speech model

  constructor(private speechService: SpeechService) { }

  ngOnInit() {
  }

}
