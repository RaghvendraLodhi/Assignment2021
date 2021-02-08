import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColserviceService {

  constructor() { }

  getCourses(){
    return [
    {
      "Id":1,
      "Name":"B.Tech",
      "ShowDetail":"false"
    },
    {
      "Id":2,
      "Name":"M.Tech",
      "ShowDetail":"false"
    },
    {
      "Id":3,
      "Name":"PhD",
      "ShowDetail":"false"
    },
    {
      "Id":4,
      "Name":"MSc",
      "ShowDetail":"false"
    },
    {
      "Id":5,
      "Name":"MBA",
      "ShowDetail":"false"
    },
    {
      "Id":6,
      "Name":"MCA",
      "ShowDetail":"false"
    }
  ]
  }
}
