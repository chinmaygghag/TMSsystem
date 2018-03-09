import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './dashboard_component/navbar/navbar.component';
import { LoginComponent } from './merchant_components/login/login.component';
import { HomeComponent } from './merchant_components/home/home.component';
import {RouterModule, Routes} from "@angular/router";
import { MainComponent } from './dashboard_component/main/main.component';

import { MerchantAuthServiceService} from "./services/merchant/merchant-auth-service.service";
import { MerchantFlashMessageServiceService} from "./services/merchant/merchant-flash-message-service.service";
import { ValidateserviceService} from "./services/merchant/validateservice.service";
import { AgentapprovalComponent } from './merchant_components/agentapproval/agentapproval.component';
import { AgentLoginComponent } from './agent-component/agentLogin/agent-login/agent-login.component';
import { AgentRegistrationComponent } from './agent-component/agentRegistration/agent-registration/agent-registration.component';
import { AgentHomeComponent } from './agent-component/agentHome/agent-home/agent-home.component';
import { AuthserviceService } from "./services/agent/authservice.service";
import { AgentvalidationService } from "./services/agent/agentvalidation.service";
import { MerchantServicesService } from "./services/merchant/merchant-services.service";
import { CrossComponent } from './user-component/cross/cross.component';
import { HorizontalComponent } from './user-component/horizontal/horizontal.component';
import { PlainComponent } from './user-component/plain/plain.component';
import { UserHomeComponent } from './user-component/user-home/user-home.component';
import { VerticalComponent } from './user-component/vertical/vertical.component';
import { UserLoginComponent } from './user-component/user-login/user-login.component';
import { UserRegisterComponent } from './user-component/user-register/user-register.component';
import { UserauthserviceService } from './services/users/userauthservice.service';
import { UserValidateService } from './services/users/user-validate.service';
import { AgentProfileComponent } from "./agent-component/agent-profile/agent-profile.component";
import { FlashMessagesModule } from 'angular2-flash-messages';



const appRoutes: Routes = [
  {path: '', component: MainComponent},
  {path: 'merchant/home/approvals', component: AgentapprovalComponent},
  {path: 'merchant/home', component: HomeComponent},
  {path: 'merchant/login', component: LoginComponent},
  {path: 'agent/register',component: AgentRegistrationComponent},
  {path: 'agent/login',component: AgentLoginComponent},
  {path: 'user/home',component: UserHomeComponent},
  {path: 'user/plain',component: PlainComponent},
  {path: 'user/vertical',component: VerticalComponent},
  {path: 'user/horizontal',component: HorizontalComponent},
  {path: 'user/cross',component: CrossComponent},
  {path: 'user/registration', component: UserRegisterComponent },
  {path: 'user/login', component: UserLoginComponent },
  {path: 'agent/profile', component: AgentProfileComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    HomeComponent,
    LoginComponent,
    HomeComponent,
    MainComponent,
    AgentapprovalComponent,
    AgentLoginComponent,
    AgentRegistrationComponent,
    AgentHomeComponent,
    CrossComponent,
    HorizontalComponent,
    PlainComponent,
    UserHomeComponent,
    VerticalComponent,
    UserLoginComponent,
    UserRegisterComponent,
    AgentProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot(),
  ],
  providers: [MerchantAuthServiceService,
    MerchantFlashMessageServiceService,
    UserauthserviceService,
    UserValidateService,
    ValidateserviceService,
    AuthserviceService,
    AgentvalidationService,
    MerchantServicesService],
    bootstrap: [AppComponent]
})




export class AppModule { }
