import { Component } from '@angular/core';
import { StatusService } from './shared/status.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'workDirectory';
  status = 'DOWN'

  constructor(
    private statusService: StatusService
  ) { }
}
