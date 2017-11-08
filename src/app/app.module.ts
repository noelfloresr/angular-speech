import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

//Import firebase configuration
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { SpeechesComponent } from './speeches/speeches.component';
import { SpeechListComponent } from './speeches/speech-list/speech-list.component';
import { SpeechDetailComponent } from './speeches/speech-detail/speech-detail.component';
import { SpeechFormComponent } from './speeches/speech-form/speech-form.component';


@NgModule({
  declarations: [
    AppComponent,
    SpeechesComponent,
    SpeechListComponent,
    SpeechDetailComponent,
    SpeechFormComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase), // imports firebase/app needed for everything
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
