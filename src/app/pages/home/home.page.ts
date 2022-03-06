import { Component, OnInit } from '@angular/core'
import { ILanguages } from 'src/app/models/languages.models'

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public languages: ILanguages[] | undefined = [
    {
      id: '1',
      name: 'JavaScript',
      vacancies: 30,
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png?20120221235433'
    },
    {
      id: '2',
      name: 'TypeScript',
      vacancies: 40,
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png?20120221235433'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
