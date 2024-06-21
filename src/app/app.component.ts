import { Component } from '@angular/core';
import { MESSAGE } from './shared/constants/messages';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  message=MESSAGE.MES_ONE

}
