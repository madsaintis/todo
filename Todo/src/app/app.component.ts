import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PlaylistService } from './playlist.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  playlists: any[] = [];
  
  constructor (private playlistService: PlaylistService) {}

    // Fetch data on component initialization
    ngOnInit(): void {
      this.playlistService.getPlaylists().subscribe(
        (data) => {
          this.playlists = data; // Assign API response to the variable
          console.log('Playlists:', data);
        },
        (error) => {
          console.error('Error fetching playlists:', error);
        }
      );
    }
}
