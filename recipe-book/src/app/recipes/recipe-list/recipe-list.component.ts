import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('recipe name', 'description blah blah', 'http://placekitten.com/300/300'),
    new Recipe('recipe dos', 'recipe2 descipt', 'http://placekitten.com/300/300')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
