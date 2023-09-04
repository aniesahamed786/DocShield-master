import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendService {




  certificates: any = [
    {
      name: 'Completion Certificate',
      status: 'Active',
      Fields:[
        {
          name:"lable name1",
         
        },
        {
          name:"lable name2",
       
        },
        {
          name:"lable name3",
        
        }
      ]
    },
    {
      name: 'Participation Certificate',
      status: 'Active',
      Fields:[ ]
    },
    {
      name: 'Training Certificate',
      status: 'Active',
      Fields:[ ]
    },
    {
      name: 'Aramco Learning Program Certificate',
      status: 'Active',
      Fields:[ ]
    },
  ];
  constructor() { }

  
}
