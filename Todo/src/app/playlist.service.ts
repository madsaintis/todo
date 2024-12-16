import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  private apiUrl = 'http://localhost:5078/api/Playlist'; // Base API URL

  constructor(private http: HttpClient) { }

  // Method to make the GET request
  getPlaylists(): Observable<any> {
    return this.http.get<any>(this.apiUrl); // Replace 'any' with a specific model/interface if you have one
  }
}
