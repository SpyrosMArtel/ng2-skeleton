/**
 * Created by spyrosmartel on 2016-07-04.
 */
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { CAROUSEL_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';
import { ImageService } from '../../services/images/image.service';

@Component({
  moduleId : module.id,
  selector: 'welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  encapsulation : ViewEncapsulation.Native,
  directives: [CORE_DIRECTIVES, CAROUSEL_DIRECTIVES],
  providers: [ ImageService ]
})
export class WelcomeComponent implements OnInit {
    public myInterval:number = 0;
    public noWrapSlides:boolean = false;
    public slides:Array<any> = [];

    constructor(private imageService : ImageService) {}

    ngOnInit() {
        this.imageService.getImages('app/assets/img/images.json')
        .then(images => {
            images.forEach( data => data.file = 'app/assets/img/' + data.file );
            this.slides = images;
        })
        .catch(error => console.log(error));
    }
}
