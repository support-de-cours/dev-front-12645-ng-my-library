import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [

    // Page Homepage
    // site.com/homepage
    {
        path: 'homepage',
        component: HomepageComponent
    },

    // Page About
    // site.com/about
    {
        path: 'about',
        component: AboutComponent
    },

    // Page Contact
    // site.com/keep-in-touch
    {
        path: 'keep-in-touch',
        component: ContactComponent
    },


    // Default routes
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/homepage'
    },

    // WildCart route
    {
        path: '**',
        // component: NotFoundComponent
        // loadChildren: () => import('./core/pages/not-found/not-found.component').then(c => c.NotFoundComponent)
        loadChildren: () => import('./core/pages/not-found/not-found.module').then(m => m.NotFoundModule)
    }

];
