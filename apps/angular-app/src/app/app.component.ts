import { Component } from '@angular/core';
import { Text } from 'shared-types/example';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title: Text = 'angular';
}
