import{ NgModule} from '@angular/core';
import{ Routes, RouterModule} from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { DocumentsDetailComponent } from './documents/documents-detail/documents-detail.component';
import { DocumentsEditComponent } from './documents/documents-edit/documents-edit.component';
import { DocumentsComponent } from './documents/documents.component';
import { MessageListComponent } from './messages/message-list/message-list.component';

const appRoutes: Routes = [
    {path:'', redirectTo: '/documents', pathMatch: 'full'},
    {path:'documents', component: DocumentsComponent, children: [
        {path:'new', component: DocumentsEditComponent},
        {path:':id', component: DocumentsDetailComponent},
        {path:':id/edit', component: DocumentsEditComponent},
    ]},
    {path:'messages', component: MessageListComponent},
    {path:'contacts', component: ContactsComponent},

]



@NgModule({

    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

    

}