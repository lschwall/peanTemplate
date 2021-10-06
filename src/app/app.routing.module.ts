import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: 'app',
    loadChildren: () => import('./features/home/home.module').then((m) => m.HomeModule)
  },
  {
    path: '',
    redirectTo: '/app',
    pathMatch: 'full'
  }
]

export const APP_ROUTING = RouterModule.forRoot(routes, {
  preloadingStrategy: PreloadAllModules
})
