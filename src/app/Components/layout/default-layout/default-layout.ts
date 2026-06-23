import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Header } from '../../header/header';
import { Navbar } from '../../navbar/navbar';
import { Footer } from '../../footer/footer';
import { NAV_FILES } from '../../core/nav-files';

@Component({
  selector: 'app-layout',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, Header, Navbar, Footer],
  templateUrl: 'default-layout.html',
  styleUrl: 'default-layout.css',
})
export class DefaultLayout {
  protected readonly files = NAV_FILES;
}
