import { ChangeDetectionStrategy, Component, inject, signal } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HelpPanelComponent } from "./help-panel/help-panel.component";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ 
    ReactiveFormsModule, 
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HelpPanelComponent
  ]
})
export class ContactFormComponent {
  protected contactForm = new FormGroup({
    name: new FormControl<string>('', Validators.required),
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    message: new FormControl<string>('', Validators.required),
  });
  protected showHelpPanel = signal(false)
  private snackBar = inject(MatSnackBar)

  protected submitForm() {

    if(this.contactForm.valid) {
      this.snackBar.open('Message sent successfully!','Dismiss' ,{
        duration:3000,
        panelClass: 'success-snackbar'
      })
      this.contactForm.reset();
    } else {
      const snackBarRed = this.snackBar.open('Please fill out all fields!','Help' ,{
        panelClass: 'error-snackbar'
      })

      snackBarRed.onAction().subscribe(() => {
        this.showHelpPanel.set(true)
      })
    }
  }
  protected closeHelpPanel() {
    this.showHelpPanel.set(false)
  }
}
