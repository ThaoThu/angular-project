import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Directive, Input } from '@angular/core';
import { AbstractControl, FormControl, NG_VALIDATORS, ValidationErrors, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[appRangeValidator]',
  providers: [{ provide: NG_VALIDATORS,useExisting:RangeValidatorDirective , multi: true }]
})
export class RangeValidatorDirective {

  @Input('range') range !: number[];
  // validate(control: AbstractControl): ValidationErrors | null {
  //   return this
  // }
  constructor() { 


  }

  validate(c: FormControl) {
 console.log('validate', this.range);
 
    let v: number = +c.value;
 
    if (isNaN(v) || !v) {
      return { 'invalid': true }
    }
 
    if (v < +this.range[0]) {
      return { 'range': true, 'requiredValue': this.range[0] }
    }

    if (v > +this.range[1]) {
      return { 'range': true, 'requiredValue': this.range[1] }
    }
 
 
    return null;
  }



}
