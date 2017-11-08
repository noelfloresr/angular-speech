import { Component, OnInit } from '@angular/core';
import { SpeechService } from '../shared-data/speech.service';

@Component({
  selector: 'app-speech-detail',
  templateUrl: './speech-detail.component.html',
  styleUrls: ['./speech-detail.component.sass']
})
export class SpeechDetailComponent implements OnInit {

  constructor(private speechService: SpeechService) { }

  ngOnInit() {
  }

}
