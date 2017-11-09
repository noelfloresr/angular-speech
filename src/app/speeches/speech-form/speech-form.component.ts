import { Component, OnInit } from '@angular/core';
import { SpeechService } from '../shared-data/speech.service';
import { Speech } from '../shared-data/speech.model';

@Component({
  selector: 'app-speech-form',
  templateUrl: './speech-form.component.html',
  styleUrls: ['./speech-form.component.sass']
})
export class SpeechFormComponent implements OnInit {
  //Properties
  speeches : Speech; //from speech model

  constructor(private speechService: SpeechService) { }

  ngOnInit() {
  }

}
