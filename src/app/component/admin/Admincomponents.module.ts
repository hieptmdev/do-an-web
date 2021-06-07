import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponentAdmin } from './menu/menu.component';
import { FooterComponentAdmin } from './footer/footer.component';
import { HeaderComponentAdmin } from './header/header.component';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { NgxPaginationModule } from 'ngx-pagination';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { OderComponent } from './home/oder/oder.component';
import { BrandComponent } from './home/brand/brand.component';
import { CategoryComponent } from './home/category/category.component';
import { UseradminComponent } from './home/useradmin/useradmin.component';
import { MatSliderModule } from '@angular/material/slider';
import { EditComponent } from './edit/edit.component';
import { EditbrandComponent } from './editbrand/editbrand.component';
import { EditcategoryComponent } from './editcategory/editcategory.component';
import { EdituserComponent } from './edituser/edituser.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@NgModule({
    imports: [
        CommonModule,
        AdminRoutingModule,
        NgxPaginationModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
    ],
  declarations: [
    FooterComponentAdmin,
    HeaderComponentAdmin,
    MenuComponentAdmin,
    AdminComponent,
    HomeAdminComponent,
    OderComponent,
    BrandComponent,
    CategoryComponent,
    UseradminComponent,
    EditComponent,
    EditbrandComponent,
    EditcategoryComponent,
    EdituserComponent,

  ],
  exports: [
  ]
})
export class AdminsModule { }
