import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuComponentAdmin } from './menu/menu.component';
import { FooterComponentAdmin } from './footer/footer.component';
import { HeaderComponentAdmin } from './header/header.component';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { HomeAdminComponent } from './home-admin/home-admin.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
    FooterComponentAdmin,
    HeaderComponentAdmin,
    MenuComponentAdmin,
    AdminComponent,
    HomeAdminComponent
  ],
  exports: [
  ]
})
export class AdminsModule { }
