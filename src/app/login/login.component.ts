import { Component } from '@angular/core';
import { Animations } from './animations';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [Animations.moveToRightLeft, Animations.opacityAnim, Animations.opacityAnim2],
})
export class LoginComponent {
  isIn = true;
  toggle() {
    this.isIn = !this.isIn;
  }
}
