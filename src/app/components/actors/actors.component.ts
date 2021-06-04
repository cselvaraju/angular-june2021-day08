import { Component, OnInit } from '@angular/core';
import { Actor } from '../../models/actor.model';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {

  selectedIndex = -1;

  actorList: Actor[] = [
    { name: 'Amitabh Bachhan', city: 'Mumbai', rating: 4.5 },
    { name: 'Will Smith', city: 'Hollywood', rating: 4.7 },
    { name: 'Priyanka Chopra Jonas', city: 'Hollywod', rating: 4.3 },
    { name: 'Aishwarya Rai', city: 'New Delhi', rating: 4.6},
    { name: 'Rajnikant', city: 'Chennai' },
  ];

  newActorName = '';
  newActorCity = '';

  myActor: Actor = {
    name: '', city: '', rating: -1
  };

  tempActor: Actor = { name: '', city: '', rating: -1};

  constructor() {
    // this.actorList = "This is actor list";
   }

  ngOnInit(): void {
  }

  deleteActor(index: number): void {
    this.actorList.splice(index, 1);
  }

  selectActor(index: number) {
    this.selectedIndex = index;

    // SHALLOW COPY!! DON'T DO THIS
    // this.tempActor = this.actorList[index];

    // SOLUTION => DEEP COPY

    // APPROACH - 1 (Works but AVOID this approach)
    // Why? It only deep copies the top level object
    // and all sub-objects are shallow copied!!
    // this.tempActor = Object.assign({}, this.actorList[index]);

    // APPROACH - 2 (Works all the time)
    this.tempActor = JSON.parse(JSON.stringify(this.actorList[index]));

    console.log("Selected Index:", this.selectedIndex);
    console.log('tempActor is:', this.tempActor);
  }

  saveActor() {
    this.selectedIndex = -1;
  }

  cancelEdit() {
    console.log("Selected Index:", this.selectedIndex);
    console.log('tempActor is:', this.tempActor);
    this.actorList[this.selectedIndex] = this.tempActor;
    this.selectedIndex = -1;
  }

  addActor() {
    if (this.newActorName === '' || this.newActorCity === '') return;
    this.actorList.push({
      name: this.newActorName,
      city: this.newActorCity
    });
    // this.newActorName = '';
    // this.newActorCity = '';

    this.newActorName = this.newActorCity = '';
  }

  addActorV2() {
    if (this.myActor.name === '' || this.myActor.city === '') return;
    this.actorList.push(this.myActor)
    this.myActor = { name: '', city: '' };
  }

  sortAscending() {
    alert("Ascending Sort");
  }
}
