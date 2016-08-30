/**
 * Created by spyrosmartel on 2016-06-30.
 */
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuItem } from "../navigation/menu-item";
import { TranslateService } from 'ng2-translate/ng2-translate';

@Component({
  moduleId: module.id,
  selector: 'language-bar',
  templateUrl: 'language-bar.component.html',
  styleUrls: ['language-bar.component.css'],
  encapsulation: ViewEncapsulation.Native,
})
export class LanguageBarComponent implements OnInit {
    private languages : MenuItem[] = [];
    translate : TranslateService;

    constructor(translate: TranslateService) {
        this.translate = translate;
    }

    ngOnInit() {
        this.languages.push(new MenuItem('gb', {'flag' : 'flag-icon-gb'}));
        this.languages.push(new MenuItem('sv', {'flag' : 'flag-icon-se'}));

        let userLang = navigator.language.split('-')[0]; // use navigator lang if available
        userLang = /( sv | gb )/gi.test(userLang) ? userLang : 'gb';
        this.translate.setDefaultLang('gb');
        this.translate.use(userLang);
    }

    switchLanguage(language) {
        this.translate.use(language);
    }
}
