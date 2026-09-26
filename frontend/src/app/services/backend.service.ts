import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HealthResponse } from './interfaces/health_response.interface';
import { ReadyResponse } from './interfaces/ready_response.interface';
import { BackVersionResponse } from './interfaces/back_version_response.interface';

declare global {
  interface Window {
    __env: {
      API_URL: string;
    };
  }
}

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  private readonly http = inject(HttpClient);

  private readonly apiUrl = window.__env.API_URL;

  health(): Observable<HealthResponse> {
    return this.http.get<HealthResponse>(`${this.apiUrl}/health`);
  }

  ready(): Observable<ReadyResponse> {
    return this.http.get<ReadyResponse>(`${this.apiUrl}/ready`);
  }

  backVersion(): Observable<BackVersionResponse> {
    return this.http.get<BackVersionResponse>(`${this.apiUrl}/meta/version`);
  }
}
