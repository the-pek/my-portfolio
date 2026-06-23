import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-overview',
  imports: [RouterLink],
  templateUrl: './overview.html',
  styleUrl: './overview.css',
})
export class Overview {
  cv: String = 'documents/CV_Kengne_Pierre-Edwin.pdf';
  profile: String = 'documents/Profile.jpg';
}
