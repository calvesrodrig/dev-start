import { Component, OnInit } from '@angular/core'
import { ILanguages } from 'src/app/models/languages.models'

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public languages: ILanguages[] | undefined

  constructor() { }

  ngOnInit() {
  }

}
