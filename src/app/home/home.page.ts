import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit{
    @ViewChild('mapContainer', {static: false}) gmap: ElementRef;
    map: google.maps.Map;
    lat = -28.4792625 ;
    lng = 24.6727135;
    coordinates = new google.maps.LatLng(this.lat, this.lng);

  constructor() {}
   
  heatmapData = [ new google.maps.LatLng(-28.4792625, 24.6727135)];
  SouthAfrica =  new google.maps.LatLng(-28.4792625, 24.6727135)
  

  marker = new google.maps.Marker({
    position: this.coordinates,
    map: this.map,
  });

  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 4,
    mapTypeId: 'satellite'
  };

 


  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement, 
    this.mapOptions);
    ; 
   }
   private heatmap: google.maps.visualization.HeatmapLayer = null;
  ngAfterViewInit(){
    
    this.mapInitializer();
    this.heatmap = new google.maps.visualization.HeatmapLayer({
        map: this.map,
        data: this.heatmapData
    });
  }

 

  
  

}

