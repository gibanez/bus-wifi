import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ApiMovieService} from 'src/app/shared/service/api-movie.service';
import {IResponseApi} from 'src/app/source/interface/i-response-api';
import {IResponseScan} from 'src/app/source/interface/i-response-scan';
import {SourceService} from 'src/app/source/source.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  private source: any;
  private movies: any;
  private selectedCar: any;
  private displayDialog: boolean;
  cols: any[];
  constructor(private sourceService: SourceService, private apiMovieService: ApiMovieService) { }

  ngOnInit() {
    // this.sourceService.getSync().subscribe((data) => {
    //   this.source = data;
    // });

    this.cols = [
      { field: 'name', header: 'Nombre' },
      { field: 'basename', header: 'Archivo' },
      { field: 'extension', header: 'Extension' }
    ];

    this.sourceService.getScan().subscribe((data: Array<IResponseScan>) => {
        this.source = data.map(item => {
          return {
            name: item.name,
            basename: item.file.basename,
            extension: item.file.extension
          };
        });
      });

  }
  onRowSelect(event) {
    this.displayDialog = true;
  }


  selectCar(event: Event, movie: any) {
    this.selectedCar = movie;
    this.displayDialog = true;
    event.preventDefault();
  }
  
  filterCountrySingle(event) {
    const query = event.query;
    this.apiMovieService.getMovies(query).subscribe((response: IResponseApi) => {
      this.movies = response.results.filter(movie => {
        return movie.vote_count > 0 && movie.backdrop_path;
      });
    });
  }

}
