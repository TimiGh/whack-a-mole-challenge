import {AfterViewChecked, Component, ElementRef, OnInit, ViewChild, viewChild} from '@angular/core';
import {HoleComponent} from "../../components/hole/hole.component";

@Component({
  selector: 'app-playground',
  standalone: true,
  imports: [
    HoleComponent
  ],
  templateUrl: './playground.component.html',
  styleUrl: './playground.component.scss'
})
export class PlaygroundComponent implements OnInit, AfterViewChecked {
   leaderboard: { score: number, date: string }[] = [];
  highscore: number = 0;
  currentScore: number = 0;
  time: number = 0;
  gameInterval: any;
  startDialog = viewChild<ElementRef<HTMLDialogElement>>('startGameDialog');
  // endDialog = viewChild<ElementRef<HTMLDialogElement>>('endGameDialog');
  protected holes = Array.from({length: 6}, (_, i) => ({id: i, isVisible: false}));
  isSDOpen: boolean = false;

  ngOnInit(): void {
    this.isSDOpen = true;
    this.showStartScreen();
  }

  ngAfterViewChecked(): void {
    // this.showStartScreen();
  }

  showStartScreen(): void {
    // this.startGame();
    // this.startDialog()?.nativeElement.showModal();
  }

  showMole(id: number): void {
    this.holes[id].isVisible = true;
    setTimeout(() => {
      this.holes[id].isVisible = false
    }, Math.floor(Math.random() * 2000) + 1000);
  }

  startGame() {
    this.isSDOpen = false;
    this.startDialog()?.nativeElement.close();
    this.currentScore = 0;
    this.gameInterval = setInterval(() => {
      const randomHole = Math.floor(Math.random() * this.holes.length);
      this.showMole(randomHole);
      this.time++;
    }, 1000)
    setTimeout(() => this.endGame(), 30000)
    // this.endDialog()?.nativeElement.close();
  }

  endGame(): void {
    clearTimeout(this.gameInterval);
    // this.endDialog()?.nativeElement.showModal();
  }

  updateScore(isMoleHit: boolean) {
    isMoleHit ? this.currentScore++ : this.currentScore = Math.max(this.currentScore - 1, 0);
  }

  hideMole(id: number) {
    this.holes[id].isVisible = false;
  }
}
