import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  constructor(private http : HttpClient) { }

  uploadfile(filename: string): void{
    
  }
}
