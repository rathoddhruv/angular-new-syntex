import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { bootstrapApplication } from '@angular/platform-browser';
import { FooComponent } from './components/foo.component';
import { ViewportLazyComponent } from './components/viewport-lazy.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    FooComponent,
    ViewportLazyComponent,
  ],
  templateUrl: './my-app.html',
  styleUrl: './my-app.scss',
})
export class App {
  index = 0;
  show = true;
  message = 'hello';
  items = [
    { id: 1, label: 'Batman' },
    { id: 2, label: 'Superman' },
    { id: 3, label: 'Iroman' },
    { id: 4, label: 'Justaman' },
  ];
}

bootstrapApplication(App, {
  providers: [],
}).catch((err) => console.error(err));
