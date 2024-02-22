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
  template: `
<link href="styles.css" rel="stylesheet">

  <mat-card>
  <mat-card-header>
  <mat-card-title>&#64;if</mat-card-title>
  </mat-card-header>
  <mat-card-content>

   @if(show; as value) {
    <div>I'm here - {{value}}</div>
   } @else {
    <div>I'm there</div>
   }
   <button mat-stroked-button (click)="show = !show">Toggle</button>
   </mat-card-content>
   </mat-card>
  <br><br>

   <mat-card>
   <mat-card-header>
   <mat-card-title>&#64;for</mat-card-title>
   </mat-card-header>
   <mat-card-content>
   <ul>
   @for (item of items; track item.id) {
     <li>{{item.label}}</li>
   }
   </ul>
   </mat-card-content>
   </mat-card><br><br>

   <mat-card>
   <mat-card-header>
   <mat-card-title>&#64;switch</mat-card-title>
   </mat-card-header>
   <mat-card-content>
   
   Item: 
   @switch (index) {
     
     @case (0) {
       <span>{{items[0].label}}</span>
     }
     @case (1) {
       <span>{{items[1].label}}</span>
     }
     @default{
       <span>Overflow</span>
     }
   }
   <div><button mat-stroked-button (click)="index = (index+1)%items.length">Next</button></div>
   </mat-card-content>
   </mat-card><br><br>

  <mat-card>
    <mat-card-header>
    <mat-card-title>&#64;Defer </mat-card-title>
    </mat-card-header>
    <mat-card-content>
      <h4>On immediate</h4>
      @defer (on immediate) {
        <foo/>
      }


      <h4>On interaction(button)</h4>
      {{message}}
      @defer (on interaction(button)) {
        World
      }
        <div><button mat-stroked-button #button>Click me</button></div>

        <br><mat-divider/>
        <h3>On Hover</h3>
        {{message}}
        @defer (on hover(button2)) {
          World
        }
        <div><button mat-stroked-button #button2>Hover me</button></div>

        <br><mat-divider/>
        <h3>On Timer (not working yet)</h3>
        <!-- https://github.com/angular/angular/pull/51635 -->
        {{message}}
        <div>@defer (on timer(5)) { World }</div>

        <br><mat-divider/>
        <h3>On Viewport</h3>
        <div #trigger>
        @defer (on viewport(trigger)) {
          <viewport-lazy />
        }
        </div>

        
        <br><mat-divider/>
        <h3>Placeholder</h3>
        @defer (when false) {
          <button></button>
        } @placeholder (minimum 2s) {
          *** PLACEHOLDER **
        }
    </mat-card-content>
    </mat-card>
  `,
  styleUrl: 'my-app.scss',
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
