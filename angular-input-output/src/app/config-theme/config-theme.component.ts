import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-config-theme',
  templateUrl: './config-theme.component.html',
  styleUrls: ['./config-theme.component.css']
})
export class ConfigThemeComponent {
  @Output() themeChange = new EventEmitter<string>();

  // Initialize the theme as 'black'
  theme: string = '#3A3636';

  changeTheme() {
    // Toggle the theme
    this.theme = this.theme === '#3A3636' ? '#A21132' : '#3A3636';

    // Emit the new theme
    this.themeChange.emit(this.theme);
  }
}