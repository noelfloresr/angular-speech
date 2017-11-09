import { Component, OnInit } from '@angular/core';
import { SpeechService } from '../shared-data/speech.service';
import { Speech } from '../shared-data/speech.model';

@Component({
  selector: 'app-speech-list',
  templateUrl: './speech-list.component.html',
  styleUrls: ['./speech-list.component.sass']
})
export class SpeechListComponent implements OnInit {
  //Properties
  speeches : Speech; //from speech model

  constructor(private speechService: SpeechService) { }

  ngOnInit() {
  }

}
