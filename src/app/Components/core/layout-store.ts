import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LayoutStore {
  readonly menuOpen = signal(false);

  toggle(): void {
    this.menuOpen.update((v) => !v);
  }

  close(): void {
    this.menuOpen.set(false);
  }
}
