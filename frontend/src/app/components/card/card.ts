import { Component, input, output } from '@angular/core';
import { PrimaryButton } from '../primary-button/primary-button';
import { SecondaryButton } from '../secondary-button/secondary-button';

@Component({
  selector: 'app-card',
  imports: [PrimaryButton, SecondaryButton],
  templateUrl: './card.html',
})
export class Card {
  title = input<string>('');
  subtitle = input<string>('');
  content = input<string>('');
  primaryButtonLabel = input<string>('');
  secondaryButtonLabel = input<string>('');
  clicked = output<void>();
}
