import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  temperaturaAtual:string= '';
  theme: string='#A21132';

  constructor() {
    this.temperaturaAtual='19º C';
   }

  ngOnInit(): void {
  }

  onThemeChange(newTheme: string) {
    this.theme = newTheme;
    // Apply the new theme
  }
}
