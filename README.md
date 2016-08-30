# ng2-skeleton
AngularJS v2 application skeleton

This project is an AngularJS v2 application skeleton. It features the following:
* ng2-bootstrap
* ng2-translate
* gulp

At the current moment the project has been modified to run with AngularJS v2 RC5, and the new router.
I will try to update the project with the next version RC6 as soon as possible (RC6 is almost about to be released, if not already out).

## Structure
The structure of the project is as follows:
```
/
├── app  <--- [Where the app starts]
│   ├── app.component.css
│   ├── app.component.html
│   ├── app.component.ts <--- [initial component used for bootstraping]
│   ├── app.module.ts    <--- [new file (RC5) containing most declarations]
│   ├── app.routing.ts   <--- [app routes]
│   ├── assets           <--- [general static files for the application, like css, languages, img]
│   │   ├── css
│   │   ├── i18n
│   │   └── img
│   ├── components       <--- [all components are here]
│   │   ├── about
│   │   ├── footer
│   │   ├── header
│   │   ├── index.ts     <--- [there are a lot index.ts files, see AngularJS barrel]
│   │   ├── shared       <--- [shared components or common code you want to share across the app]
│   │   │   ├── index.ts
│   │   │   ├── language-bar
│   │   │   └── navigation
│   │   └── welcome
│   ├── main.ts           <--- [every AngularJS v2 has one, here is where everything starts]
│   └── services          <--- [here you add your services]
├── bs-config.json        <--- [browser-sync configuration]
├── gulpfile.js           <--- [gulp configuration]
├── index.html            <--- [The ring that rules them all]
├── package.json          <--- [NodeJS dependencies]
├── systemjs.config.js    <--- [SystemJS configuration]
├── tsconfig.json         <--- [TypeScript configuration]
└── typings.json          <--- [Typings]
```

## How to run
Dead simple... `npm i` followed by `gulp`. Please make sure you have Gulp installed, otherwise you can install it by typing `npm i -g gulp`.
Finally, run the application with `npm start` and you are set. At this moment, the app will reside in a directory called `dist`, and gulp will watch over and make sure everything is updated. The gulp watch might need some more refinement.

Enjoy and keep hacking. :)
