import { Component, inject, OnInit, signal } from '@angular/core';
import { BackendService } from './services/backend.service';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  protected readonly title = signal('frontend');

  private readonly backendService = inject(BackendService);

  protected readonly statusHealth = signal('Checking...');
  protected readonly statusReady = signal('Checking...');

  ngOnInit(): void {
    this.backendService.health().subscribe({
      next: (response) => {
        this.statusHealth.set(`${response.status} - ${response.service}`);
      },
      error: () => {
        this.statusHealth.set('Backend unavailable');
      },
    });

    this.backendService.ready().subscribe({
      next: (response) => {
        this.statusReady.set(`${response.status} - ${response.service}`);
      },
      error: () => {
        this.statusReady.set('Backend unavailable');
      },
    });
  }
}
