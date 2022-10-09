import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageService } from '../services/image.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  images: any;
  id: number;
  filename: string;
  story: string;
  group: string;
  constructor(private route: ActivatedRoute, private imageservice: ImageService,public formBuilder: FormBuilder) {
    this.id = Number.parseInt(this.route.snapshot.paramMap.get('id'));
    this.filename = this.route.snapshot.paramMap.get('filename');
    this.story = this.route.snapshot.paramMap.get('story');
    this.group = this.route.snapshot.paramMap.get('group');
    //console.log(this.id+" "+this.filename+" "+this.story+" "+this.group);
  }

  ngOnInit() {

  }
  discardImage() {
    this.imageservice.delImage(this.id);
    window.location.href = "/list-images";
  }
}
