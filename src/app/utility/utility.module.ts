import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoverDirective } from './dirctives/hover.directive';
import { ChangebackgroundcolourDirective } from './directives/changebackgroundcolour.directive';



@NgModule({
  declarations: [
    HoverDirective,
    ChangebackgroundcolourDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HoverDirective,
    ChangebackgroundcolourDirective
  ]
})
export class UtilityModule { }
