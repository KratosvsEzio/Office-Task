import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSliderModule } from '@angular/material/slider';
import { AppRoutingModule, routingComponent } from './app-routing.module';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { ToasterComponent } from './common/toaster/toaster.component';
import { NgxThanosModule } from '@wellwind/ngx-thanos';
import { LoaderComponent } from './common/loader/loader.component';

import { ExportAsModule } from 'ngx-export-as';

@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    HeaderComponent,
    FooterComponent,
    ToasterComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatIconModule,
    MatCardModule,
    MatSliderModule, 
    NgxThanosModule,
    MatSliderModule,
    CKEditorModule, 
    NgxThanosModule,
    ExportAsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
