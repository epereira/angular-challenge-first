import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-composant',
  templateUrl: './composant.component.html',
  styleUrls: ['./composant.component.css']
})
export class ComposantComponent implements OnInit {
  name: string = "Bob";
  imageSrc: string = "https://via.placeholder.com/350x150";

  sayHello(): void  {
    alert("Bonjour !");
  }

  constructor() { }

  ngOnInit(): void {
  }

}
