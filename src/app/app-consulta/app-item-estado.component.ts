import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-item-estado',
    template: 'Estado: {{ estado }}'
})
export class ItemEstadoComponent {
    @Input()
    estado: string;
}