/**
 * Created by spyrosmartel on 2016-06-27.
 */
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuItem } from '../shared/navigation/menu-item';

@Component({
  moduleId: module.id,
  selector: 'header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class HeaderComponent implements OnInit {
  menuItems : MenuItem[] = [];

  ngOnInit() {
    this.menuItems.push(new MenuItem('HOME', {"url" : ''}));
    this.menuItems.push(new MenuItem('ABOUT', {"url" : '/about'}));
  }
}
