import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HeroService} from "../hero.service";
import {Hero} from "../hero";
import {mergeMap} from "rxjs";
import {switchMap} from "rxjs/operators";


@Component({
    selector: 'app-super-powers',
    templateUrl: './super-powers.component.html',
    styleUrls: ['./super-powers.component.css']
})
export class SuperPowersComponent implements OnInit {
    heroes: Array<Hero> | undefined = [];


    constructor(private router: Router,
                private readonly heroService: HeroService,
                private activatedRoute: ActivatedRoute,) {
    }

    ngOnInit(): void {
        this.getHero();
    }

    private getHero(): void {
        this.activatedRoute.params.pipe(
            switchMap(param => this.heroService.getHero(param["id"]))
        ).subscribe((hero) => {
            this.heroes?.push(hero);
        });
    }

}
