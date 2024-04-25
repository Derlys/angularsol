import {CommonModule} from '@angular/common'
import {Component} from '@angular/core'
import {RouterLink, RouterOutlet} from '@angular/router'
import {HeaderComponent} from './header/header.component'

@Component({
  selector: 'dapp-ui-layout',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, HeaderComponent],
  template: `
    <div class="flex flex-col h-full justify-between ">
      <app-header></app-header>
      <div class='flex-grow  py-4 px-16  '>
        <div class="text-red-700 text-3xl">
          <router-outlet></router-outlet>
        </div>
      </div>
<!--      <app-footer></app-footer>-->
    </div>
  `,
  styles: ``,
})
export class LayoutComponent {
}

