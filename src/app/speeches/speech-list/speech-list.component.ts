import { Component, OnInit } from '@angular/core';
import { SpeechService } from '../shared-data/speech.service';

@Component({
  selector: 'app-speech-list',
  templateUrl: './speech-list.component.html',
  styleUrls: ['./speech-list.component.sass']
})
export class SpeechListComponent implements OnInit {

  constructor(private speechService: SpeechService) { }

  ngOnInit() {
  }

}
