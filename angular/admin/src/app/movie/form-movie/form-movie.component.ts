import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {IResponseList} from 'src/app/shared/interface/i-response-list';
import {SourceService} from 'src/app/source/source.service';

@Component({
  selector: 'app-form-movie',
  templateUrl: './form-movie.component.html',
  styleUrls: ['./form-movie.component.css']
})
export class FormMovieComponent implements OnInit {

  form: FormGroup;
  private sources: {};
  constructor(private formBuilder: FormBuilder, private sourceService: SourceService) { }
  ngOnInit() {

    this.sourceService.findAll(1, {limit: 100}).subscribe(({data}: IResponseList) => {
      this.sources = data;
    });

    this.form = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      source: new FormControl('', Validators.required),
      });
  }

  save() {
    console.info('SAVE', this.form.value);
  }

  onChange(event) {
    console.info('onChange', this.form.controls.name.value, event.value.name);
    //this.form.controls.name.value = event.value.name;
    this.form.controls['name'].patchValue( event.value.name);
  }

}
