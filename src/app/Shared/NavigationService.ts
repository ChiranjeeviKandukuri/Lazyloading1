import { Injectable } from '@angular/core';
import { NavigationItem } from '../models/models';
@Injectable()
export class NavigationService {
  constructor() { }
  public navitems: NavigationItem[] = [];
}
