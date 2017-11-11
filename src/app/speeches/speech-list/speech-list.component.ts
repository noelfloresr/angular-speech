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
  authorList : string[];

  constructor(private speechService: SpeechService) { 
    this.authorList = [];
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
    // this.speechList.map((x)=>{
    //   this.authorList.push(x.author);
    // });
    var algo = this.speechList.filter((item, position, a)=>{
      console.log(this.speechList.indexOf(item.author) === position);
    })
  }

}
