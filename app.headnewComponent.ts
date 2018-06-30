import { Component } from '@angular/core';

@Component({
  selector: 'headnew',
  templateUrl: './headernew.html',
  styleUrls:['./app.headnew.css']
 })
export class headnewComponent {
  slideIndex = 1;

  nextImage(indexPhoto): void {
    this.showImage(this.slideIndex += indexPhoto);
  }

  showImage(indexPhoto): void {
    var headPhotos = document.getElementsByClassName("headPhoto") as HTMLCollectionOf<HTMLElement>;
    if (indexPhoto > headPhotos.length) {this.slideIndex = 1;};
    if (indexPhoto < 1) {this.slideIndex = headPhotos.length;};
    
    var indexCount;
    for (indexCount = 0; indexCount < headPhotos.length; indexCount++) {
      headPhotos[indexCount].style.display = "none";
    }
    headPhotos[this.slideIndex-1].style.display = "block"; 
  }

}

