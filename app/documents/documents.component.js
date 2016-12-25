"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var DocumentsComponent = (function () {
    function DocumentsComponent() {
        this.pageTitle = "Document Dashboard";
        this.documents = [
            {
                title: 'My First Doc',
                description: 'First doc',
                file_url: 'http://google.com',
                updated_at: '23/12/16',
                image_url: 'http://lorempixel.com/400/200',
            },
            {
                title: 'My Second Doc',
                description: 'First doc',
                file_url: 'http://google.com',
                updated_at: '23/12/16',
                image_url: 'http://lorempixel.com/400/200',
            },
            {
                title: 'My Third Doc',
                description: 'First doc',
                file_url: 'http://google.com',
                updated_at: '23/12/16',
                image_url: 'http://lorempixel.com/400/200',
            }];
    }
    DocumentsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'documents',
            templateUrl: 'documents.component.html',
            styleUrls: ['documents.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], DocumentsComponent);
    return DocumentsComponent;
}());
exports.DocumentsComponent = DocumentsComponent;
//# sourceMappingURL=documents.component.js.map