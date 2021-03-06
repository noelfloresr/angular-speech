import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Some bootstrap components
import { CollapseModule } from 'ngx-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

//Pipes
import { FilterPipe } from './speeches/filter.pipe';

//Services
import { SpeechService } from './speeches/shared-data/speech.service';

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

import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthorPipe } from './speeches/author.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SpeechesComponent,
    SpeechListComponent,
    SpeechDetailComponent,
    SpeechFormComponent,
    NavbarComponent,
    FilterPipe,
    AuthorPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    CollapseModule,
    BsDropdownModule.forRoot()
  ],
  providers: [
    SpeechService //To avoid add it into each component
   ], 
  bootstrap: [AppComponent]
})
export class AppModule { }
