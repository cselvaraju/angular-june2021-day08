import { Injectable } from '@angular/core';
import { Actor } from "../models/actor.model";

@Injectable({
  providedIn: 'root'
})
export class ActorsService {

  actorList: Actor[] = [
    { name: 'Amitabh Bachhan', city: 'Mumbai', rating: 4.5 },
    { name: 'Will Smith', city: 'Hollywood', rating: 4.7 },
    { name: 'Priyanka Chopra Jonas', city: 'Hollywod', rating: 4.3 },
    { name: 'Aishwarya Rai', city: 'New Delhi', rating: 4.6},
    { name: 'Rajnikant', city: 'Chennai' },
  ];

  constructor() { }

  getActorList(): Actor[] {
    return this.actorList;
  }

  addActor(newActor: Actor) {
    this.actorList.push(newActor);
  }

  deleteActor(index: number) {
    this.actorList.splice(index, 1);
  }

  setActor(index: number, newActor: Actor) {
    const clonedActor: Actor = JSON.parse(JSON.stringify(newActor));
    this.actorList.splice(index, 1, clonedActor);
  }
}
