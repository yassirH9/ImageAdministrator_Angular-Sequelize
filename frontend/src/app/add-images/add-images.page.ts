import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ImageService } from '../services/image.service';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-add-images',
  templateUrl: './add-images.page.html',
  styleUrls: ['./add-images.page.scss'],
})
export class AddImagesPage implements OnInit {

  imageform: FormGroup;
  isSubmitted: boolean = false;
  capturedPhoto: string = "";

  constructor(public formBuilder: FormBuilder,
    private imageService: ImageService,
    private photoService: PhotoService,
    private router: Router
  ) { }

  ionViewWillEnter() {
    this.imageform.reset();
    this.isSubmitted = false;
    this.capturedPhoto = "";
  }

  ngOnInit() {
    this.imageform = this.formBuilder.group({
      story: ['', [Validators.required]],
      group: ['', [Validators.required]]
    })
  }

  get errorControl() {
    return this.imageform.controls;
  }

  takePhoto() {
    this.photoService.takePhoto().then(data => {
      this.capturedPhoto = data.webPath;
    });
  }

  pickImage() {
    this.photoService.pickImage().then(data => {
      this.capturedPhoto = data.webPath;
    });
  }

  discardImage() {
    this.capturedPhoto = null;
  }

  async submitForm() {
    this.isSubmitted = true;
    if (!this.imageform.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      let blob = null;
      if (this.capturedPhoto != "") {
        const response = await fetch(this.capturedPhoto);
        blob = await response.blob();
      }

      this.imageService.createImages(this.imageform.value, blob).subscribe(data => {
        console.log("Photo sent!");
        this.router.navigateByUrl("/list-images");
      })
    }
  }
}
