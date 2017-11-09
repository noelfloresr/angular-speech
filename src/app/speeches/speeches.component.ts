import { Component, OnInit } from '@angular/core';

//shared data
import { SpeechService } from './shared-data/speech.service';
import { Speech } from './shared-data/speech.model';

@Component({
  selector: 'app-speeches',
  templateUrl: './speeches.component.html',
  styleUrls: ['./speeches.component.sass']
})
export class SpeechesComponent implements OnInit {

  constructor(private speechService: SpeechService) { }

  ngOnInit() {
  }

}
