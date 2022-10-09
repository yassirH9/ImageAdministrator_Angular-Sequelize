import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddImagesPageRoutingModule } from './add-images-routing.module';

import { AddImagesPage } from './add-images.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddImagesPageRoutingModule
  ],
  declarations: [AddImagesPage]
})
export class AddImagesPageModule {}
