import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw'
import { Subject } from 'rxjs/Subject'
import {BehaviorSubject} from 'rxjs/BehaviorSubject'

@Injectable()
export class DataService {

  url: string

  // Observable string sources
  private _loadDataSource = new BehaviorSubject<any[]>([])
  // Observable string streams

  loadData$ = this._loadDataSource.asObservable()

  constructor(private http: Http) {
    this.url = './element.json'
  }

  emitData() {
    this.getAll()
      .subscribe(
      response => {
        this._loadDataSource.next(response.json())
      },
      error => {
        console.log(error)
      })
  }

  getAll() {
    return this.http.get(this.url)
  }

}
