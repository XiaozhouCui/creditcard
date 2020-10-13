import { FormControl } from '@angular/forms';

// set credit card expiry date format to "MM/YY"
export class DateFormControl extends FormControl {
  // overide default FormControl method
  setValue(value: string | null, options: any) {
    // make reset button work (cardForm.reset()), must be at the top!
    if (!value) {
      // reset to empty string when clicking reset button
      super.setValue('', { ...options, emitModelToViewChange: true });
      return;
    }
    if (value.match(/[^0-9|\/]/gi)) {
      // "value" is tht newly entered value, "this.value" is the previous value stored in formControl obj
      // emitModelToViewChange will update/control html form input value on every key stroke
      super.setValue(this.value, { ...options, emitModelToViewChange: true });
      return;
    }

    if (value.length > 5) {
      super.setValue(this.value, { ...options, emitModelToViewChange: true });
      return;
    }

    // "this.value" includes "/", so that user can delete "/"
    if (value.length === 2 && this.value.length === 3) {
      super.setValue(value, { ...options, emitModelToViewChange: true });
      return;
    }

    if (value.length === 2) {
      // call original setValue method of FormControl, "value" argument is now hijacked
      super.setValue(value + '/', { ...options, emitModelToViewChange: true });
      return;
    }
    super.setValue(value, { ...options, emitModelToViewChange: true });
  }
}
