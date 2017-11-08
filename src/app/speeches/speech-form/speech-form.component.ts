import { Component, OnInit } from '@angular/core';
import { SpeechService } from '../shared-data/speech.service';

@Component({
  selector: 'app-speech-form',
  templateUrl: './speech-form.component.html',
  styleUrls: ['./speech-form.component.sass']
})
export class SpeechFormComponent implements OnInit {

  constructor(private speechService: SpeechService) { }

  ngOnInit() {
  }

}
