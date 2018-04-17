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
import { ViewCatalogComponent } from "./user-component/view-catalog/view-catalog.component";
import { BsDropdownModule } from 'ng2-bootstrap';
import { CreateCatalogComponent} from "./merchant_components/create-catalog/create-catalog.component";
import { CreatCatalogServiceService} from "./services/catalogService/creat-catalog-service.service";
import { GetCatalogsService} from "./services/catalogService/get-catalogs.service";
import { SaveUserDataService } from "./services/miscService/save-user-data.service";
import { PlaceOrderService} from "./services/placeorders/place-order.service";
import { ReceivedOrdersComponent} from "./agent-component/received-orders/received-orders.component";
import { ReceivedOrdersFromMerchantComponent} from "./merchant_components/receivedOrdersForMerchant/received-orders-from-merchant/received-orders-from-merchant.component";
import { GetOrdersService } from "./services/merchant/get-orders.service";
import { CustomizeCatalogComponent} from "./user-component/customize-catalog/customize-catalog.component";
import { FooterComponentComponent } from "./dashboard_component/footer-component/footer-component.component";
import { SliderModule} from "angular-image-slider";
import { CartComponent} from "./user-component/user-cart/cart/cart.component";
import {CheckoutComponent} from "./user-component/checkout/checkout.component";
import { CartServiceService} from "./services/cart/cart-service.service";
import { BrowserAnimationsModule} from "@angular/platform-browser/animations";


const appRoutes: Routes = [
  {path: '', component: MainComponent},
  {path: 'merchant/home/receivedOrders',component:ReceivedOrdersFromMerchantComponent},
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
  {path: 'agent/profile', component: AgentProfileComponent},
  {path: 'merchant/createcatalog',component: CreateCatalogComponent},
  {path: 'user/home/viewcatalog/cart/checkout', component: CheckoutComponent},
  {path: 'user/home/viewcatalog/cart',component:CartComponent},
  {path: 'user/home/viewcatalog',component: ViewCatalogComponent},
  {path: 'agent/home', component: ReceivedOrdersComponent},
  {path: 'user/home/customzieCatalog',component:CustomizeCatalogComponent},
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
    AgentProfileComponent,
    ViewCatalogComponent,
    CreateCatalogComponent,
    ReceivedOrdersComponent,
    ReceivedOrdersFromMerchantComponent,
    CustomizeCatalogComponent,
    FooterComponentComponent,
    CartComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SliderModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  providers: [MerchantAuthServiceService,
    MerchantFlashMessageServiceService,
    UserauthserviceService,
    UserValidateService,
    ValidateserviceService,
    AuthserviceService,
    AgentvalidationService,
    CreatCatalogServiceService,
    GetCatalogsService,
    SaveUserDataService,
    PlaceOrderService,
    GetOrdersService,
    CartServiceService,
    MerchantServicesService],
  bootstrap: [AppComponent]
})




export class AppModule { }
