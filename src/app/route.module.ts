import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AppRoutingComponent } from './name.component';
import { DashboardComponent } from './dashboard/dashborad.component';
import { UserComponent } from './sysManage/user.component';

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    {path:'user',component:UserComponent}
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
