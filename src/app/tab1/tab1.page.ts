import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {firstValueFrom} from "rxjs";
import {Router} from "@angular/router";
import {Furry} from "../models";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page implements OnInit{

  furries: Furry[] = [];

  constructor(private http: HttpClient, private router: Router) {

  }

  async getFurries() {
    const furryReq = this.http.get<Furry[]>('https://furriesfinal.azurewebsites.net/api/furries');
    this.furries = await firstValueFrom<Furry[]>(furryReq);
    console.log(this.furries.entries());
  }

  ngOnInit(): void {
    this.getFurries().then()
  }

  goto(f: any) {
    this.router.navigate(['app/tabs/profile'])
  }
}
