import { Injectable, WritableSignal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private _token: WritableSignal<string | null> = signal(sessionStorage.getItem("sessionToken"))

  get token():string | null {
    return this._token();
  }

  setToken(value:string | null) {
      this._token.set(value)
  }

}
