import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  // @HostListener('window:scroll',['$event'])
  // scroll(event){
  //   console.debug("Scroll Event", document.body.scrollTop)
  //   console.debug("Scroll Event", window.pageYoffset)
  // }
}
