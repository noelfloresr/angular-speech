import { NgModule } 				from '@angular/core';
import { RouterModule, Routes } 	from '@angular/router';

//import components
import { SpeechDetailComponent } 	from './speeches/speech-detail/speech-detail.component';
import { SpeechFormComponent } 		from './speeches/speech-form/speech-form.component';
import { SpeechListComponent } 		from './speeches/speech-list/speech-list.component';

const routes: Routes = [
	{ path: '', redirectTo: '/list', pathMatch: 'full' },
	{ path: 'list', component: SpeechListComponent },
	{ path: 'add', component: SpeechFormComponent },
	{ path: 'detail/:id', component: SpeechDetailComponent },
	{ path: 'edit/:id', component: SpeechFormComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})

export class AppRoutingModule { }
