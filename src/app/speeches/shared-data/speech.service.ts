import { Injectable } from '@angular/core';
//Import modules needed for Firebase communication
import { AngularFireList, AngularFireObject, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import { Speech } from './speech.model';

@Injectable()
export class SpeechService {
  private basePath: string = '/speeches';

  dbObject: AngularFireList<any>;
  items: Observable<any>;
  item: Observable<any>;
  

  selectedSpeech : Speech = new Speech();

  constructor(private db: AngularFireDatabase) { 
  	this.dbObject = db.list(this.basePath); //Define where to store data
  }

  getItemsList(){
    //it returns an observable object
    this.items = this.dbObject.snapshotChanges();
  	return this.items;
  }

  getItem(key: string){
  	const itemPath = `${this.basePath}/${key}`;
    this.item = this.db.object(itemPath).valueChanges();
  	return this.item;
  }

  createItem(item:Speech){
  	this.dbObject.push(item);
  }

  updateItem(key:string, value:any):void{
  	this.dbObject.update(key, value)
  		.catch(error => this.handleError(error));
  }

  deleteItem(key:string):void{
  	this.dbObject.remove(key)
  		.catch(error => this.handleError(error));
  }

   // Default error handling for all actions
   private handleError(error) {
   	console.log(error)
   }

}
