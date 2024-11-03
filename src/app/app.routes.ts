import { Routes } from '@angular/router';
import { CadastrarClientesComponent } from './cadastrar-clientes/cadastrar-clientes.component';
import { ConsultarClientesComponent } from './consultar-clientes/consultar-clientes.component';
import { EditarClientesComponent } from './editar-clientes/editar-clientes.component';

export const routes: Routes = [
    {
        path: 'app/cadastrar-clientes',
        component: CadastrarClientesComponent
    },
    {
        path: 'app/consultar-clientes',
        component: ConsultarClientesComponent
    },

    {
        path: 'app/editar-clientes/:id',
        component: EditarClientesComponent
    },
    {
        path: '', pathMatch: 'full',
        redirectTo: '/app/consultar-clientes'
    }
];
