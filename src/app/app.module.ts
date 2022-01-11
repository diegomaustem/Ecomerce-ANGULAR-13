import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD

=======
>>>>>>> ca0f16f3c20961196dd86a92c6883e671eeaf4d1
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderMainComponent } from './header/header-main/header-main.component';
import { MainNavComponent } from './header/main-nav/main-nav.component';
<<<<<<< HEAD
import { ListProdutosComponent } from './list-produtos/list-produtos.component';
import { CopyRightComponent } from './copy-right/copy-right.component';
import { ProductComponent } from './product/product.component';
=======
import { CopyRightComponent } from './copy-right/copy-right.component';
import { ProductComponent } from './product/product.component';
import { LayoutComponent } from './layout/layout.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { RegisterproductComponent } from './registerproduct/registerproduct.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiserviceService } from './apiservice.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateProductComponent } from './update-product/update-product.component';


>>>>>>> ca0f16f3c20961196dd86a92c6883e671eeaf4d1

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderMainComponent,
    MainNavComponent,
<<<<<<< HEAD
    ListProdutosComponent,
    CopyRightComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
=======
    CopyRightComponent,
    ProductComponent,
    LayoutComponent,
    AllProductsComponent,
    RegisterproductComponent,
    ListProductsComponent,
    UpdateProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ApiserviceService],
>>>>>>> ca0f16f3c20961196dd86a92c6883e671eeaf4d1
  bootstrap: [AppComponent]
})
export class AppModule { }
