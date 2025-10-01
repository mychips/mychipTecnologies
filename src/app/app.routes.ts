import { HomeComponent } from './pages/home/home.component';
import { Routes } from '@angular/router';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';

export const routes: Routes = [
    {
        path: 'home', component: HomeComponent, title: 'Home'
    },
    {
        path: 'toolbar', component: ToolbarComponent, title: 'Toolbar'    },
    {
        path: '**', redirectTo: 'home', pathMatch: 'full'
    }
];
