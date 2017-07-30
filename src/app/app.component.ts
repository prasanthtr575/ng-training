import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  on=true;
  style='italic';

toggle() {
  this.on = !this.on;
}
}
