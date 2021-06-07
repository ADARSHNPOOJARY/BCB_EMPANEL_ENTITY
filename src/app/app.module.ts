import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpanelledEntityComponent } from './empanelled-entity/empanelled-entity.component';
import { MobileNoOnlyDirective } from './directives/mobile-no-only.directive';
import { EmailOnlyDirective } from './directives/email-only.directive';
import { NameValidateDirective } from './directives/name-validate.directive';
import { AddressValidateDirective } from './directives/address-validate.directive';
import { RemarksValidateDirective } from './directives/remarks-validate.directive';
// import { DateFormatDirective } from './directives/date-format.directive';

@NgModule({
  declarations: [
    AppComponent,
    EmpanelledEntityComponent,
    MobileNoOnlyDirective,
    EmailOnlyDirective,
    NameValidateDirective,
    AddressValidateDirective,
    RemarksValidateDirective,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
