/**
 * Created by spyrosmartel on 2016-08-26.
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http }    from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent,
         FooterComponent,
         WelcomeComponent,
         LanguageBarComponent,
       } from './components';

import { APP_ROUTER_PROVIDERS } from './app.routing';

import { TranslateModule,
         TranslateLoader, TranslateStaticLoader } from 'ng2-translate/ng2-translate';

@NgModule({
    // module dependecies
    imports : [
        BrowserModule,
        FormsModule,
        HttpModule,
        APP_ROUTER_PROVIDERS,
        TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (http: Http) => new TranslateStaticLoader(http, 'app/assets/i18n', '.json'),
            deps: [Http]
        })
    ],
    // components and directives
    declarations : [
        AppComponent,
        WelcomeComponent,
        HeaderComponent,
        FooterComponent,
        LanguageBarComponent
    ],
    // root component
    bootstrap : [
        AppComponent
    ],
    // services
    providers : [ ]
})

export class AppModule {}