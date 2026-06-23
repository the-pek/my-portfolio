import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LayoutStore } from '../core/layout-store';

@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './header.html',
})
export class Header {
  protected readonly ui = inject(LayoutStore);
}
