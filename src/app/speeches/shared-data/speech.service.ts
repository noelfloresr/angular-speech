import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireObject, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Speech } from './speech.model';

@Injectable()
export class SpeechService {
  //Properties
  private basePath: string = '/speeches';

  itemsList: AngularFireList<any>;
  items: any[];
  itemsObsrvable: Observable<any[]>;
  itemObject: AngularFireObject<any>;
  selectedSpeech : Speech = new Speech();

  constructor(private db: AngularFireDatabase) { 
  	this.itemsList = db.list('speeches'); //Define where to store data
  }

  getItemsList(){
  	this.itemsList = this.db.list('speeches');
  	console.log(this.itemsList);
  	return this.itemsList;
  }

  getItem(key: string){
  	const itemPath = `${this.basePath}/${key}`;
  	this.itemObject = this.db.object(itemPath);
  	return this.itemObject;
  }

  createItem(item:Speech){
  	this.itemsList.push(item);
  }

  updateItem(key:string, value:any):void{
  	this.itemsList.update(key, value)
  		.catch(error => this.handleError(error));
  }

  deleteItem(key:string):void{
  	this.itemsList.remove(key)
  		.catch(error => this.handleError(error));
  }

   // Default error handling for all actions
   private handleError(error) {
   	console.log(error)
   }

}
