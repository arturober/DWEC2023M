import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-gestures',
  templateUrl: './gestures.page.html',
  styleUrls: ['./gestures.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class GesturesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
