import { Component, computed, input } from '@angular/core';
import {
  CheckCircle,
  ExclamationCircle,
  InfoCircle,
  MinusCircle,
  SpinnerDotted,
  TimesCircle,
} from '@primeicons/angular';

export enum TagType {
  warning = 'WARNING',
  info = 'INFO',
  progress = 'PROGRESS',
  success = 'SUCCESS',
  error = 'ERROR',
  default = 'DEFAULT',
}

@Component({
  selector: 'app-project-status-tag',
  imports: [MinusCircle, CheckCircle, ExclamationCircle, InfoCircle, TimesCircle, SpinnerDotted],
  templateUrl: './status-tag.html',
})
export class StatusTag {
  label = input<string>('');
  type = input<TagType>(TagType.default);
  icon = input<string>();
  styles = computed(() => TAG_STYLES[this.type()]);
  protected readonly TagType = TagType;
}

const TAG_STYLES: Record<TagType, { classes: string }> = {
  [TagType.success]: { classes: 'border-green-500 bg-green-100' },
  [TagType.warning]: { classes: 'border-yellow-500 bg-yellow-100' },
  [TagType.progress]: { classes: 'border-blue-500 bg-blue-100' },
  [TagType.info]: { classes: 'border-gray-500 bg-gray-100' },
  [TagType.error]: { classes: 'border-red-500 bg-red-100' },
  [TagType.default]: { classes: 'border-black bg-white' },
};
