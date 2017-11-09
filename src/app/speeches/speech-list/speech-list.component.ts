import { Component, OnInit } from '@angular/core';
import { AngularFireList } from 'angularfire2/database';

//shared data
import { SpeechService } from '../shared-data/speech.service';
import { Speech } from '../shared-data/speech.model';

@Component({
  selector: 'app-speech-list',
  templateUrl: './speech-list.component.html',
  styleUrls: ['./speech-list.component.sass']
})
export class SpeechListComponent implements OnInit {
  //Properties
  speechList : Speech[]; //from speech model

  constructor(private speechService: SpeechService) { }

  ngOnInit() {
  	this.getSpeechList();
  }

  getSpeechList(){
  	this.speechList = this.speechService.getItemsList();
  }

}
