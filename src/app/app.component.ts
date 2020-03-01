import {
  Component,
  Inject,
  LOCALE_ID,
  HostBinding,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'localization-ng';

  @HostBinding('attr.dir') dir = 'ltr';

  constructor(@Inject(LOCALE_ID) private locale: string) {}

  ngOnInit() {
    if (this.locale.startsWith('ar')) {
      this.dir = 'rtl';
    }

  }
}
