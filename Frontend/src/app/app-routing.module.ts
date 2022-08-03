import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsettingsComponent } from './accountsettings/accountsettings.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ChooseTemmplateComponent } from './choose-temmplate/choose-temmplate.component';
import { Form1Component } from './form1/form1.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
// import { ResumePreviewComponent } from './resume-preview/resume-preview.component';
import { SignupComponent } from './signup/signup.component';
import { Template1Component } from './template1/template1.component';
import { Template2Component } from './template2/template2.component';
import { Template3Component } from './template3/template3.component';
import { Template4Component } from './template4/template4.component';
import { UserUIComponent } from './user-ui/user-ui.component';
import { AuthGuard } from './auth.guard';
import { EditDataComponent } from './edit-data/edit-data.component';
import { MyProjectComponent } from './my-project/my-project.component';

const routes: Routes = [{path:"",component: HomeComponent},
                        {path:"\login",component: LoginComponent},
                        {path:"\signup",component: SignupComponent},
                        {path:"\_temp1",component: Template1Component},
                        {path:"\data",component: Form1Component,canActivate:[AuthGuard]},
                        {path:"\_temp2",component:Template2Component,canActivate:[AuthGuard]},
                        {path:"\_temp3",component:Template3Component,canActivate:[AuthGuard]},
                        {path:"\_temp4",component:Template4Component,canActivate:[AuthGuard]},
                        {path:"\Choose_Template",component:ChooseTemmplateComponent,canActivate:[AuthGuard]},
                        {path:"\home_user",component:UserUIComponent,canActivate:[AuthGuard]},
                        {path:"\Accountsettings",component:AccountsettingsComponent,canActivate:[AuthGuard]},
                        {path:"\admin",component:AdminLoginComponent},
                        {path:"\choosetemp",component:ChooseTemmplateComponent,canActivate:[AuthGuard]},
                        {path:"\data_edit",component:EditDataComponent,canActivate:[AuthGuard]},
                        {path:"\myresumes", component:MyProjectComponent,canActivate:[AuthGuard]}
                        // {path:"\previewResume",
                        //  component:ResumePreviewComponent,
                        // children:[
                        //   {path:"\_temp1",component: Template1Component},
                        //   {path:"\data",component: Form1Component},
                        //   {path:"\_temp2",component:Template2Component},
                        //   {path:"\_temp3",component:Template3Component}
                        //   ] 
                        // }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
