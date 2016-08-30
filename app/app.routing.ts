/**
 * Created by spyrosmartel on 2016-06-30.
 */
import { Routes, RouterModule }  from '@angular/router';
import { WelcomeComponent, AboutComponent } from './components';

const routes: Routes = [
    {
        path: '',
        component: WelcomeComponent,
    },
    {
        path: 'about',
        component: AboutComponent,
    }
];

export const APP_ROUTER_PROVIDERS = RouterModule.forRoot(routes);