import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'httpclient';
  
  //for-first-table
  users : any;

  //for-second-table  
  myuser : any;

  constructor(private httpclient : HttpClient,  private myclient:HttpClient) {

    
 

  }

  ngOnInit(): void {

    //for-first-table

    let data = this.httpclient.get("https://fakestoreapi.com/products");

    data.subscribe((result : any) => {

      // console.log(result);

      this.users = result;
      
        
     
    //for-second-table
      let mydata =  this.myclient.get("https://jsonplaceholder.typicode.com/posts");
    
      mydata.subscribe((myresult : any) => {
  
          this.myuser = myresult;
    })
     
    })

    
  }
}
