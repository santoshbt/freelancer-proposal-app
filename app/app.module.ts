import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HomePageComponent} from './homepage/homepage.component'
import {DocumentsComponent} from './documents/documents.component'
import {ProposalListComponent} from './proposals/proposal-list.component'
import {ProposalNewComponent} from './proposals/proposal-new.component'
import {AppRoutingModule} from './app-routing.module'
import {ProposalShowComponent} from './proposals/proposal-show.component'
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        HomePageComponent,
        DocumentsComponent,
        ProposalListComponent,
        ProposalNewComponent,
        ProposalShowComponent
    ],
    bootstrap: [
        AppComponent        
    ]
})

export class AppModule {}