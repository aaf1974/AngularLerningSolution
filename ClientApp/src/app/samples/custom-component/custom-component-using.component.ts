import { Component } from "@angular/core";

@Component(
  {
    selector: 'custom-component-using',
    templateUrl:'./custom-component-using.component.html'
  }
)
export class CustomComponentUsingComponent {

  logForm(value) {
    console.log(value);
  }
}
