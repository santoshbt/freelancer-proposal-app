import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {HomePageComponent} from './homepage/homepage.component'
import {DocumentsComponent} from './documents/documents.component'
import {ProposalListComponent} from './proposals/proposal-list.component'
import {ProposalNewComponent} from './proposals/proposal-new.component'
import {ProposalShowComponent} from './proposals/proposal-show.component'

const routes: Routes = [
    {path:'', redirectTo:'/home', pathMatch:'full'},
    {path:'home', component: HomePageComponent},
    {path:'documents', component: DocumentsComponent},
    {path:'proposals', component: ProposalListComponent},
    {path:'proposals/new', component: ProposalNewComponent},
    {path:'proposal/:id', component: ProposalShowComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}