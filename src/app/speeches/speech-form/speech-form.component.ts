import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

//Shared data
import { SpeechService } from '../shared-data/speech.service';
import { Speech } from '../shared-data/speech.model';


@Component({
  selector: 'app-speech-form',
  templateUrl: './speech-form.component.html',
  styleUrls: ['./speech-form.component.sass']
})
export class SpeechFormComponent implements OnInit {
  //Properties
  speech : Speech; //from speech model

  constructor(private speechService: SpeechService) { }

  ngOnInit() {
  }

  onSubmit(speechForm: NgForm){
  	console.log(speechForm);
  	this.speechService.createItem(speechForm.value);
  	speechForm.resetForm();
  }

}
