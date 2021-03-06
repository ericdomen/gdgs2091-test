import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLogged = false;
  @Output() toggleSidenav = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onToggleSidenav() {
    this.toggleSidenav.emit();
  }

}
