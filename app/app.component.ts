    import { Component } from '@angular/core';
    import { Hero } from './hero';
    import { HeroService } from './hero.service';
    

    @Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <h2>My Heroes</h2>

     <nav>
        <a routerLink="/dashboard">Dashboard</a>
        <a routerLink="/heroes">Heroes</a>
    </nav>

    <router-outlet></router-outlet>

    <!--
    <my-heroes></my-heroes>
    -->
    `,
    
    providers: [HeroService]
    })
    export class AppComponent {

    constructor(private heroService: HeroService) { }

    ngOnInit(): void {
    
    }

    title = 'Tour of Heroes';

    

    }