import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, RouterOutlet, RouterModule, ToolbarComponent]
})
export class AppComponent {
  title = 'mychipTecnologia';
}
