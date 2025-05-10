import { Component, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-help-panel',
  templateUrl: './help-panel.component.html',
  styleUrl: './help-panel.component.scss',
  imports: [MatButtonModule]
})
export class HelpPanelComponent {
  close = output<void>();
}