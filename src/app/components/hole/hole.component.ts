import {Component, effect, input, InputSignal, OnInit, output, WritableSignal} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-hole',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './hole.component.html',
  styleUrl: './hole.component.scss'
})
export class HoleComponent {
  id: InputSignal<number | undefined> = input<number>();
  isMoleVisible = input(false);
  isHit: boolean = false;
  isMiss: boolean = false;
  onMoleHit = output<boolean>()
  onVisibilityExpired = output<number>();

  constructor() {
    effect(() => {
      console.log(this.isMoleVisible(), this.id());
      if (this.isMoleVisible()) {
        this.hideMole();
        this.isMiss = false;
        this.isHit = false;
      }
    });
  }

  hitMole(): void {
    if (this.isMoleVisible()) {
      this.isHit = true;
      this.isMiss = false;
    } else {
      this.isHit = false;
      this.isMiss = true;
    }

    this.onMoleHit.emit(this.isMoleVisible());
    this.onVisibilityExpired.emit(this.id()!)
  }

  hideMole(): void {
    const randomTime = Math.floor(Math.random() * 2000) + 1000;
    setTimeout(() => this.onVisibilityExpired.emit(this.id()!), randomTime);
  }
}
