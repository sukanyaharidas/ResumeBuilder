import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatStepperModule} from '@angular/material/stepper';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Template1Component } from './template1/template1.component';
import { Form1Component } from './form1/form1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonalDetailsComponent } from './form1/personal-details/personal-details.component';
import { EducationDetailsComponent } from './form1/education-details/education-details.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { WorkexperienceComponent } from './form1/workexperience/workexperience.component';
import { SkillsComponent } from './form1/skills/skills.component';
import { HobbiesComponent } from './form1/hobbies/hobbies.component';
import { Template4Component } from './template4/template4.component';
import { UserUIComponent } from './user-ui/user-ui.component';
import { ChooseTemmplateComponent } from './choose-temmplate/choose-temmplate.component';
import { Template3Component } from './template3/template3.component';
import { Template2Component } from './template2/template2.component';
import { SignupComponent } from './signup/signup.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AccountsettingsComponent } from './accountsettings/accountsettings.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AuthServiceService } from './auth-service.service';
// import { ResumePreviewComponent } from './resume-preview/resume-preview.component';
import { HttpInterceptor } from '@angular/common/http';
import { TokenInterceptorService } from './token-interceptor.service';
import { MyProjectComponent } from './my-project/my-project.component';
import { EditDataComponent } from './edit-data/edit-data.component';
import { EditEducationComponent } from './edit-data/edit-education/edit-education.component';
import { EditPersonalComponent } from './edit-data/edit-personal/edit-personal.component';
import { EditHobbyComponent } from './edit-data/edit-hobby/edit-hobby.component';
import { EditSkillComponent } from './edit-data/edit-skill/edit-skill.component';
import { EditWorkComponent } from './edit-data/edit-work/edit-work.component';
import { Temp3linkComponent } from './templink/temp3link/temp3link/temp3link.component';
import { ManageuserComponent } from './manageuser/manageuser.component';
import { NgToastModule } from 'ng-angular-popup';
import{Temp1linkComponent} from './templink/temp1link/temp1link/temp1link.component'
import { Temp2linkComponent } from './templink/temp2link/temp2link/temp2link.component';
import { Temp4linkComponent } from './templink/temp4link/temp4link/temp4link.component';
import { MytemplatesComponent } from './mytemplates/mytemplates.component';
import { NgxCopyPasteModule } from 'ngx-copypaste';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    Template1Component,
    Form1Component,
    PersonalDetailsComponent,
    EducationDetailsComponent,
    WorkexperienceComponent,
    SkillsComponent,
    HobbiesComponent,
    Template4Component,
    UserUIComponent,
    ChooseTemmplateComponent,
    Template3Component,
    Template2Component,
    SignupComponent,
    Temp1linkComponent,
    Temp2linkComponent,
    Temp4linkComponent,
    SidenavComponent,
    AccountsettingsComponent,
    AdminLoginComponent,
    EditDataComponent,
    MyProjectComponent,
    EditEducationComponent,
    EditPersonalComponent,
    EditHobbyComponent,
    EditSkillComponent,
    EditWorkComponent,
    Temp3linkComponent,
    ManageuserComponent,
    MytemplatesComponent
    // ResumePreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    NgToastModule,
    MatStepperModule,
    NgxCopyPasteModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatProgressBarModule,
    MatToolbarModule

   
  ],
  exports: [
    MatStepperModule
  ],

  providers: [AuthServiceService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
