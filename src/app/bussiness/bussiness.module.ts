import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { ROUTES_BUSSINESS } from './bussiness.route';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../layout/header/header.component';
import { FooterComponent } from '../layout/footer/footer.component';
import { SidebarComponent } from '../layout/sidebar/sidebar.component';
import { BreadcumbComponent } from '../layout/breadcumb/breadcumb.component';
import { ContabilidadComponent } from './contabilidad/contabilidad.component';
import { VehiculosComponent } from './vehiculos/vehiculos.component';
import { ParqueaderoComponent } from './parqueadero/parqueadero.component';

const ROUTES = [...ROUTES_BUSSINESS];

@NgModule({
    imports: [
        RouterModule.forChild(ROUTES),
        SharedModule
    ],
    declarations: [
        HomeComponent,
        HeaderComponent,
        SidebarComponent,
        FooterComponent,
        BreadcumbComponent,
        ContabilidadComponent,
        VehiculosComponent,
        ParqueaderoComponent
    ]
})
export class BussinessModule {}
