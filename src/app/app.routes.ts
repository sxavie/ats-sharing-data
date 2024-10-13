import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [{
    path: 'home',
    component: HomeComponent,
    children: [{
        path: 'input',
        loadComponent: () => import('./components/input/input.component').then(m => m.InputComponent)
    },{
        path: 'output',
        loadComponent: () => import('./components/output/output.component').then(m => m.OutputComponent)
    },{
        path: 'view-child',
        loadComponent: () => import('./components/viewchild/viewchild.component').then(m => m.ViewchildComponent)
    },{
        path: 'services',
        loadComponent: () => import('./components/services/services.component').then(m => m.ServicesComponent)
    },{
        path: 'signals',
        loadComponent: () => import('./components/signals/signals.component').then(m => m.SignalsComponent)
    }]
},
{
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
}];
