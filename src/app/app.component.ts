import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, ToolbarComponent, 
            MatToolbarModule, MatButtonModule, MatCardModule, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` 
  <router-outlet>
    <app-toolbar></app-toolbar>
  </router-outlet>
  `
})
export class AppComponent {
  title = 'mychipTecnologia';
}
