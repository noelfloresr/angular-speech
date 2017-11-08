import { Component, OnInit } from '@angular/core';
import { SpeechService } from './shared-data/speech.service';

@Component({
  selector: 'app-speeches',
  templateUrl: './speeches.component.html',
  styleUrls: ['./speeches.component.sass'],
  providers: [SpeechService]
})
export class SpeechesComponent implements OnInit {

  constructor(private speechService: SpeechService) { }

  ngOnInit() {
  }

}
