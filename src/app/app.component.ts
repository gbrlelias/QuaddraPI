import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {

    const firebaseConfig = {
      apiKey: "AIzaSyDDKx9mSxULCPVwBNU59Xx7HkiPjbGVACM",
      authDomain: "quaddra-50098.firebaseapp.com",
      databaseURL: "https://quaddra-50098-default-rtdb.firebaseio.com",
      projectId: "quaddra-50098",
      storageBucket: "quaddra-50098.appspot.com",
      messagingSenderId: "534594850245",
      appId: "1:534594850245:web:91000df2a41c232c7e4fac"
    };


    firebase.initializeApp(firebaseConfig)
  }
  title = 'app3';
}
