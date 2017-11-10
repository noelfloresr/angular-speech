import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

//For routing purposes
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

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
  id: string;

  constructor(
    private speechService: SpeechService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
  ) { 
    this.speech = this.initSpeechModel();
  }

  ngOnInit() {
    this.getItem();
  }

  getItem(){
    this.id = this.route.snapshot.paramMap.get('id');

    if(this.id && this.id.trim().length > 0) {
      this.speechService.getItem(this.id)
        .subscribe((result) => {
          this.speech = result;
        });
    } else {
      this.speech = this.initSpeechModel();
    }
  }

  initSpeechModel() {
    return {
      $key: null,
      title : '',
      imageUrl: '',
      body: '',
      author: '',
      keywords: [],
      publishDate : new Date()
    }
  }

  onSubmit(speechForm: NgForm){
    if(!this.id) {
    	this.speechService.createItem(speechForm.value);
    	speechForm.resetForm();
    }
    else{
      this.speechService.updateItem(this.id, speechForm.value);
      speechForm.resetForm();
      this.router.navigate(['/detail', this.id]);
    }
  }

}
