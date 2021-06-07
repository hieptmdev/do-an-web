import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "./admin.component";
import { EditComponent } from "./edit/edit.component";
import { EditbrandComponent } from "./editbrand/editbrand.component";
import { EditcategoryComponent } from "./editcategory/editcategory.component";
import { EdituserComponent } from "./edituser/edituser.component";
import { HomeAdminComponent } from "./home-admin/home-admin.component";
import { BrandComponent } from "./home/brand/brand.component";
import { CategoryComponent } from "./home/category/category.component";
import { UseradminComponent } from "./home/useradmin/useradmin.component";

const routes: Routes = [
    {path: '', component: AdminComponent, children: [
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: HomeAdminComponent},
    {path:'a-brand',component:BrandComponent},
    {path:'a-category',component : CategoryComponent},
    {path:'a-user', component: UseradminComponent},
    {path:'a-edit/:id',component:EditComponent},
    {path:'a-editbrand/:id',component:EditbrandComponent},
    {path:'a-editcate/:id',component:EditcategoryComponent},
    {path:'a-edituser/:id',component:EdituserComponent}
  ]}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
