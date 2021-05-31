import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpanelledEntityComponent } from './empanelled-entity/empanelled-entity.component';
import { MobileNoOnlyDirective } from './mobile-no-only.directive';
import { EmailOnlyDirective } from './email-only.directive';
import { NameValidateDirective } from './name-validate.directive';
import { AddressValidateDirective } from './address-validate.directive';
import { RemarksValidateDirective } from './remarks-validate.directive';
import { DateFormatDirective } from './date-format.directive';

@NgModule({
  declarations: [
    AppComponent,
    EmpanelledEntityComponent,
    MobileNoOnlyDirective,
    EmailOnlyDirective,
    NameValidateDirective,
    AddressValidateDirective,
    RemarksValidateDirective,
    DateFormatDirective
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
