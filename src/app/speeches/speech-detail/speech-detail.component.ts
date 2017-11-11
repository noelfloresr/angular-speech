import { Component, OnInit } from '@angular/core';

//For routing purposes
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { SpeechService } from '../shared-data/speech.service';
import { Speech } from '../shared-data/speech.model';


@Component({
  selector      : 'app-speech-detail',
  templateUrl   : './speech-detail.component.html',
  styleUrls     : ['./speech-detail.component.sass']
})
export class SpeechDetailComponent implements OnInit {
  speech     : Speech;
  id         : string;
  keywords   : string[];
  currentUrl : string;

  constructor(
    private speechService  : SpeechService,
    private route          : ActivatedRoute,
    private router         : Router,
    private location       : Location,
  ) { 
    this.speech = this.initSpeechModel(); //initialize the object to empty
  }

  ngOnInit() {
    this.getItem();
  }

  getItem(){
    //get the id from the url, required @angular/router
    this.id = this.route.snapshot.paramMap.get('id');
    this.currentUrl = this.router.url;
    this.speechService.getItem(this.id)
        .subscribe((result)=>{
          this.speech = result;
          this.keywords = result.keywords.split(",");
        });
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

  deleteItem(){
    if (confirm('Are you sure to delete this record ?') == true) {
      this.speechService.deleteItem(this.id);
      this.router.navigate(['/list']);
    }
  }

  goBack():void{
    this.location.back();
  }

}
