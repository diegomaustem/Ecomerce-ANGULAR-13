import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { RegisterproductComponent } from './registerproduct/registerproduct.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path: '', redirectTo:'listproducts', pathMatch: 'full'},
  {
    path:'',
    component: LayoutComponent,
    children:[
      {path: 'listproducts', component: ListProductsComponent},
      {path: 'allproducts', component: AllProductsComponent},
      {path: 'registerproduct', component: RegisterproductComponent},
      {path: 'registerproduct/:id', component: RegisterproductComponent},
      {path: 'product/:id', component: ProductComponent}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
