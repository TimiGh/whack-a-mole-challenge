import {Component, input, output} from '@angular/core';

@Component({
  selector: 'app-hole',
  standalone: true,
  imports: [],
  templateUrl: './hole.component.html',
  styleUrl: './hole.component.scss'
})
export class HoleComponent {
  id = input();
  isMoleVisible = input(false);
  onMoleHit = output<boolean>()

  hitMole(): void {
    this.onMoleHit.emit(this.isMoleVisible());
  }
}
