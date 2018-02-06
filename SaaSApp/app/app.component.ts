import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
    template: `<h1>Hello {{name}} hahhahah {{age}}</h1>`,
})
export class AppComponent  {
    name = 'World';
    age = " We might be a billion years old but finally figured this shit out";
}
