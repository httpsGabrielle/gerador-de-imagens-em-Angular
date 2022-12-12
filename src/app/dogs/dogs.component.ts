import { Component } from '@angular/core';
import { Dog } from '../dogs';
import { DogService } from '../dog.service';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent {
  dog: Dog = {
    status: "",
    message:""
  };

  constructor(private dogService: DogService) { }

  ngOnInit(): void {
    this.getDogs();
  }

  getDogs(): void {
    this.dogService.getDogs()
        .subscribe((dog) => {
          this.dog = dog
        })
  }

}
