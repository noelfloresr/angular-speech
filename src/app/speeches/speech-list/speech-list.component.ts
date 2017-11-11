import { Component, OnInit } from '@angular/core';

//shared data
import { SpeechService } from '../shared-data/speech.service';
import { Speech } from '../shared-data/speech.model';


@Component({
  selector: 'app-speech-list',
  templateUrl: './speech-list.component.html',
  styleUrls: ['./speech-list.component.sass'],
})
export class SpeechListComponent implements OnInit {
  speechList : Speech[]; 
  authorList : any[];
  author: string;
  keywords: any;

  constructor(private speechService: SpeechService) { 
    this.authorList = [];
    this.author = '';
   }

  ngOnInit() {
  	this.getSpeechList();
  }

  getSpeechList(){
    this.speechService.getItemsList()
        .subscribe((result)=>{ 
          this.speechList = [];
          result.forEach(element => {
            var data = element.payload.toJSON();
            data["$key"] = element.key;
            this.speechList.push(data as Speech);
          });
          this.fillAuthorList()
        })
  }

  fillAuthorList(){
    this.authorList = this.speechList.map(x => x.author)
        .filter((value, index, self)=>self.indexOf(value) === index);
  }

}
