import {Component, output} from '@angular/core';

@Component({
  selector: 'app-start-dialog',
  standalone: true,
  imports: [],
  templateUrl: './start-dialog.component.html',
  styleUrl: './start-dialog.component.scss'
})
export class StartDialogComponent {
  onStartGame = output();

  startGame() {
    this.onStartGame.emit();
  }
}
