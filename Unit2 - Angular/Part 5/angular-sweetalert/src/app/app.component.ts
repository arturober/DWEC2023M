import { Component, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SwalComponent, SwalPortalTargets, SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SweetAlert2Module],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @ViewChild('confirmDialog') modal!: SwalComponent;
  title = 'angular-sweetalert';
  name = '';

  swalTargets = inject(SwalPortalTargets)

  sayHello(name: string) {
    this.name = name;
  }

  cancelHello() {
    console.log("Cancelled!");
  }

  async showModal() {
    const resp = await this.modal.fire();
    if(resp.isConfirmed) {
      console.log("You said yes");
    }
  }
}
