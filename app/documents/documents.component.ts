import {Component} from '@angular/core'
import {Document} from './document';

@Component({
    moduleId: module.id,
    selector: 'documents',
    templateUrl: 'documents.component.html'
})

export class DocumentsComponent{
    pageTitle = "Document Dashboard";
    documents:Document[] = [
    {
        title: 'My First Doc',
        description: 'First doc',
        file_url: 'http://google.com',
        updated_at: '23/12/16',
        image_url: 'http://google.com',
    },
    {
        title: 'My Second Doc',
        description: 'First doc',
        file_url: 'http://google.com',
        updated_at: '23/12/16',
        image_url: 'http://google.com',
    },
    {
        title: 'My Third Doc',
        description: 'First doc',
        file_url: 'http://google.com',
        updated_at: '23/12/16',
        image_url: 'http://google.com',
    }]
}