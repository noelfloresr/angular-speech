import { Injectable } from '@angular/core';
import { Speech } from './speech.model';

@Injectable()
export class SpeechService {
  
  selectedSpeech : Speech = new Speech();
  constructor() { }

}
