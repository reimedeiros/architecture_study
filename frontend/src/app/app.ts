import { Component, inject, OnInit, signal } from '@angular/core';
import { BackendService } from './services/backend.service';
import { version } from '../../package.json';

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

  frontVersion = signal('Checking...');
  backVersion = signal('Checking...');

  ngOnInit(): void {
    this.frontVersion.set(version);
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

    this.backendService.backVersion().subscribe({
      next: (response) => {
        this.backVersion.set(`${response.version} - ${response.service}`);
      },
      error: () => {
        this.backVersion.set('Backend unavailable');
      },
    });
  }
}
