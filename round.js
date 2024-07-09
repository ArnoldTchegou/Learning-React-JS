import { Circleclass } from "./Circleclass";
//inheritance
export class round extends Circleclass {
  constructor(radius, form) {
    super(radius);
    this.form = form;
  }
}
