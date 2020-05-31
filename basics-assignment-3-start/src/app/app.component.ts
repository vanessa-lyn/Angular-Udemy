import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
        .whiteText {
            color: white;
        }
    `]
})
export class AppComponent {
  showParagraph = false;
  buttonClicks = [];
  
  onClick () {
    this.toggleView();
    this.addtoArray();
  }

  toggleView () {
    return this.showParagraph = !this.showParagraph;
  }

  addtoArray () {
    this.buttonClicks.push(this.buttonClicks.length+1);
  }
}

