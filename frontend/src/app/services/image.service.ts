import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  endPoint = "http://localhost:8080/api/image";

  constructor(private httpClient: HttpClient) { }

  getImages(){
    return this.httpClient.get(this.endPoint);
  }
  getImage(id:number){
    return this.httpClient.get(this.endPoint+"/"+id);
  }
  delImage(id:number){
    console.log("delete: "+id);
    this.httpClient.delete(this.endPoint+"/"+id).subscribe((data)=>{});
  }
  updateImage(image, blob){
    // let formData = new FormData();
    // formData.append("story", image.story);
    // formData.append("group", image.group);
    // formData.append("file", blob);
    // return this.httpClient.put(this.endPoint+"/"+image.id, formData);
  }
  createImages(image, blob){
    let formData = new FormData();
    formData.append("story", image.story);
    formData.append("group", image.group);
    formData.append("file", blob);

    return this.httpClient.post(this.endPoint, formData);
  }
}
