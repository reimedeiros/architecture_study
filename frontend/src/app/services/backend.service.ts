import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HealthResponse } from './interfaces/health_response.interface';
import { ReadyResponse } from './interfaces/ready_response.interface';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  private readonly http = inject(HttpClient);

  private readonly apiUrl = 'http://localhost:3000';

  health(): Observable<HealthResponse> {
    return this.http.get<HealthResponse>(`${this.apiUrl}/health`);
  }

  ready(): Observable<ReadyResponse> {
    return this.http.get<ReadyResponse>(`${this.apiUrl}/ready`);
  }
}
