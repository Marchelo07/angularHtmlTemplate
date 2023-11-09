import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { PotafolioComponent } from './pages/potafolio/potafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';

const app_routes: Routes = [
    { path: 'home', component: PotafolioComponent },
    { path: 'about', component: AboutComponent },
    { path: 'item', component: ItemComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
]

/*UseHash para colocar # en la url y el lugar donde despliege la aplicacion
detecte que despues del hash los navegadores detecten que es la continuacion de la ruta*/
@NgModule({
    imports: [
        RouterModule.forRoot(app_routes, { useHash: true })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}