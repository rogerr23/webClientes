import { Routes } from '@angular/router';
import { CadastrarClientesComponent } from './cadastrar-clientes/cadastrar-clientes.component';
import { ConsultarClientesComponent } from './consultar-clientes/consultar-clientes.component';

export const routes: Routes = [
    {
        path: 'app/cadastrar-clientes',
        component: CadastrarClientesComponent
    },
    {
        path: 'app/consultar-clientes',
        component: ConsultarClientesComponent
    }
];
