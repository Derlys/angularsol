import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLinkActive,
    RouterLink
  ],
  template: `<div class="w-full bg-white p-12">
    <header class="absolute inset-x-0 top-0 z-50">
      <nav
        class="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div class="flex lg:flex-1">
          <a href="#" class="-m-1.5 p-1.5">
            <img class="h-16 w-auto" src="https://lh3.googleusercontent.com/n_TaRxtJkqpuTZs0LpRt9CEzJ_ceVjVU_W9J6INIDioom4IJ8s9jP5dvCwwffYKo7giJf1oUqOyqZnb5iMHzQrk=w16383" alt="logo" />
          </a>
        </div>
        <div class="flex lg:hidden">
          <button
            type="button"
            (click)="toggle()"
            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

        <div class="hidden lg:flex lg:gap-x-12">
          <a
            routerLinkActive="active" routerLink="/16ome" class="text-gray-900 hover:bg-blue-700   hover:text-gray-900 rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Home</a>
          <button type="button" class="rounded-full bg-blue-500 px-2.5 py-1 text-sm font-semibold text-gray-900 shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            <a
              routerLinkActive="active" routerLink="/wallet" >Access Wallet</a>

          </button>
        </div>
      </nav>

      <!-- Mobile menu, show/hide based on menu open state. -->
      <div
        class="lg:hidden"
        [class.block]="open"
        [class.hidden]="!open"
        role="dialog"
        aria-modal="true"
      >
        <!-- Background backdrop, show/hide based on slide-over state. -->
        <div class="fixed inset-0 z-50"></div>
        <div
          class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
        >
          <div class="flex items-center justify-between">
            <a href="/" class="-m-1.5 p-1.5">
              <img
                class="h-8 w-auto"
                src="https://lh3.googleusercontent.com/n_TaRxtJkqpuTZs0LpRt9CEzJ_ceVjVU_W9J6INIDioom4IJ8s9jP5dvCwwffYKo7giJf1oUqOyqZnb5iMHzQrk=w16383"
                alt="icono"
              />
            </a>
            <button
              type="button"
              (click)="toggle()"
              class="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span class="sr-only">Close menu</span>
              <svg
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <a
                  class="-mx-3 block rounded-lg px-3 py-2 text-sm font-semibold leading-7 text-gray-900 hover:bg-blue-700"
                  routerLinkActive="active"
                  routerLink="/"
                  (click)="toggle()"
                >Home</a
                >
                <button type="button" class="rounded-full bg-blue-500 px-2.5 py-1 text-sm font-semibold text-gray-900 shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  <a
                    routerLinkActive="active"
                    routerLink="/wallet"
                    (click)="toggle()"
                  >Access Wallet</a
                  >
                </button>



              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>`,
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  open = false;
  toggle() {
    this.open = !this.open;
  }
}
