import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list-images',
    pathMatch: 'full'
  },
  {
    path: 'list-images',
    loadChildren: () => import('./list-images/list-images.module').then( m => m.ListImagesPageModule)
  },
  {
    path: 'add-images',
    loadChildren: () => import('./add-images/add-images.module').then( m => m.AddImagesPageModule)
  },
  {
    path: 'edit/:id/:filename/:story/:group',
    loadChildren: () => import('./edit/edit.module').then( m => m.EditPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
