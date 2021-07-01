import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { delay, switchMap } from 'rxjs/operators';
import { Cocktail } from '../cocktail.model';
import { CocktailService } from '../cocktail.service';

@Component({
  selector: 'app-cocktails-details',
  templateUrl: './cocktails-details.component.html',
  styleUrls: ['./cocktails-details.component.css']
})
export class CocktailsDetailsComponent implements OnInit {
  cocktail:Cocktail;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data: {cocktail:Cocktail}) => {
      this.cocktail = data.cocktail
    })

  }

  

}
// cocktails$: Observable<Cocktail>;

//   constructor(private activatedRoute: ActivatedRoute) { }

//   ngOnInit(): void {
//     this.cocktails$=this.activatedRoute.paramMap.pipe(
     
//       switchMap(paramsMap =>{
//         const id=paramsMap.get('id');
//         return this.cocktailService.getById(id)
//       })
//         )
    
//   }