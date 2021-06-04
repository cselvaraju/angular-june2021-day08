import { Component, OnInit } from '@angular/core';
import { Actor } from "../../models/actor.model";
import { ActorsService } from "../../services/actors.service";

@Component({
  selector: 'app-actors-v2',
  templateUrl: './actors-v2.component.html',
  styleUrls: ['./actors-v2.component.css']
})
export class ActorsV2Component implements OnInit {
  selectedIndex = -1;
  newActorName = '';
  newActorCity = '';
  myActor: Actor = { name: '', city: '', rating: -1 };
  tempActor: Actor = { name: '', city: '', rating: -1};
  actorList: Actor[];

  constructor(private actorsService: ActorsService) {
    this.actorList = this.actorsService.getActorList();
  }

  ngOnInit(): void {
  }

  deleteActor(index: number): void {
    // this.actorList.splice(index, 1);
    this.actorsService.deleteActor(index);
  }

  selectActor(index: number) {
    this.selectedIndex = index;

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
    // this.actorList[this.selectedIndex] = this.tempActor;

    this.actorsService.setActor(this.selectedIndex, this.tempActor);

    this.selectedIndex = -1;
  }

  addActor() {
    if (this.newActorName === '' || this.newActorCity === '') return;
    // this.actorList.push({
    //   name: this.newActorName,
    //   city: this.newActorCity
    // });
    // this.newActorName = '';
    // this.newActorCity = '';

    // Use the service to add an actor

    const newActor: Actor = {
      name: this.newActorName,
      city: this.newActorCity
    };

    this.actorsService.addActor(newActor);

    // Don't do it like this!! Not a good practice
    // this.actorsService.addActor({
    //   name: this.newActorName,
    //   city: this.newActorCity
    // });

    this.newActorName = this.newActorCity = '';
  }

  // HOMEWORK
  // Change this code to use addActor from the service
  addActorV2() {
    if (this.myActor.name === '' || this.myActor.city === '') return;
    this.actorList.push(this.myActor)
    this.myActor = { name: '', city: '' };
  }

  sortAscending() {
    alert("Ascending Sort");
  }
}
