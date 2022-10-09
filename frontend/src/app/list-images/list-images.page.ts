import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImageService } from '../services/image.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-list-images',
  templateUrl: './list-images.page.html',
  styleUrls: ['./list-images.page.scss'],
})
export class ListImagesPage implements OnInit {

  images: any = [];

  constructor(private imageservice: ImageService, private router: Router,private navCTR: NavController) { }

  ngOnInit() { 
    //this.id = Number.parseInt(this.route.snapshot.paramMap.get('id'));

  }

  ionViewDidEnter(){
    this.getAllImage();
  }

  getAllImage() {
    this.imageservice.getImages().subscribe(image => {
      console.log(image);
      this.images = image;
    })
  }
  addImage(){
    this.router.navigateByUrl("/add-images");
  }
  deleteClick(id:number){
    this.imageservice.delImage(id);
    window.location.reload();
  }

  updatreClick(id:number,filename:string,story:string,group:string){
    this.navCTR.navigateForward('/edit/'+id+"/"+filename+"/"+story+"/"+group);
    //window.location.href = "/edit"
  }
}
