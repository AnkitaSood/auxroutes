import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-super-powers',
  templateUrl: './super-powers.component.html',
  styleUrls: ['./super-powers.component.css']
})
export class SuperPowersComponent implements OnInit {
  name: string | null | undefined;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,) { }

  ngOnInit(): void {
    this.name = this.activatedRoute.snapshot.paramMap.get('name');
  }

}
