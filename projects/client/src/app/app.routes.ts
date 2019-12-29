import { Routes } from '@angular/router';
import { AuthGuard } from './auth/helpers/auth.guard';
export const appRoutes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('./site/site.module').then(m => m.SiteModule),
    },
    {
        path: 'portal',
        loadChildren: () =>
            import('./modules/modules.module').then(m => m.ModulesModule),
        canActivate: [AuthGuard],
    },
    {
        path: 'auth',
        loadChildren: () => 
            import('./auth/auth.module').then(m => m.AuthModule),
    },
];
