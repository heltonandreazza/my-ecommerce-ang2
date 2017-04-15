import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  // @Output() featureSelected = new EventEmitter<string>();

  onSelect(feature: string) {
    // dont need anymore because we are using routes
    // this.featureSelected.emit(feature);
  }
}
