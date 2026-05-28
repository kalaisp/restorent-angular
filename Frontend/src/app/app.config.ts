import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { Routes } from '@angular/router';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { PropertyDetailResolverService } from './property/property-detail/property-detail-resolver.service';
const routes: Routes = [
  { path: '', component: PropertyListComponent },
    { path: 'property-details/:id', component: PropertyDetailComponent,resolve:{prp:PropertyDetailResolverService} },
  { path: 'rent-property', component: PropertyListComponent },         // ✅ Default route
  { path: 'add-property', component: AddPropertyComponent },
     { path: 'user/register', component: UserRegisterComponent },
      { path: 'user/login', component: UserLoginComponent },
      { path: '**', component: PropertyListComponent }

];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),   // ✅ Correct way to provide routes in standalone
    provideHttpClient(),  provideAnimations()
  ]
};
