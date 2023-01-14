import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-item-nome',
    template: 'Nome: {{ nome }}'
})
export class ItemNomeComponent {

    @Input()
    nome: string;

}