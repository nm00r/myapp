import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  imagesUrl = [
    './../../assets/poert1.png',
    './../../assets/port2.png',
    './../../assets/port3.png',
  ];
  isLayerVisible: boolean = false;
  selectedImage: string | null = null;

  toggleLayer(imageUrl: string) {
    this.selectedImage = imageUrl;
    this.isLayerVisible = true;
  }
  hideLayer() {
    this.isLayerVisible = false;
    this.selectedImage = null;
  }
}
