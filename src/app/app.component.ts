import { Component } from '@angular/core';
import {HelloWorldComponent} from'./HelloWorld/helloworld.component';
import {MinhapaginaComponent} from './minhapaginacomponent/minhapaginacomponent.component';
@Component({
  selector: 'app-root',
  imports: [HelloWorldComponent, MinhapaginaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'conceitos-basicos';
}
