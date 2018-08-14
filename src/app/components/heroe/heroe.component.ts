import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html'
})
export class HeroeComponent {
    heroe: any = {};
    casas: string[] = ['assets/img/marvel-logo.png', 'assets/img/dc-logo.png'];

    constructor(private _activatedRoute: ActivatedRoute,
                private _heroesService: HeroesService
                ) {
        this._activatedRoute.params.subscribe(params => {
            /**
             * params: Es un objeto que trae toda la información enviado
             * Para obtener un parametro en especifico lo puedo hacer
             * de la siguiente manera: params['id']
             */
            const index = params['id'];
            this.heroe = this._heroesService.getHeroe(index);
        });
    }

}
