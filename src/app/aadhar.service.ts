import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AadharService {
  constructor(private http: HttpClient) {}
  public checkAdminLoginCreds(
    email: string,
    password: string
  ): Observable<string> {
    return this.http.put<string>(
      `http://localhost:8088/admin/login/${email}/${password}`,
      null
    );
  }

  public getAdmin(email: string): Observable<any> {
    return this.http.get(`http://localhost:8088/admin/${email}`);
  }

  public adminLogout(email: string): Observable<string> {
    return this.http.put<string>(
      `http://localhost:8088/admin/logout/${email}`,
      null
    );
  }
  public checkCitizenLoginCreds(
    email: string,
    password: string
  ): Observable<string> {
    return this.http.put<string>(
      `http://localhost:8088/citizen/login/${email}/${password}`,
      null
    );
  }

  public getCitizen(email: string): Observable<any> {
    return this.http.get(`http://localhost:8088/citizen/email/${email}`);
  }
  public getAadharStatus(email: string, password: string): Observable<string> {
    return this.http.get<string>(
      `http://localhost:8088/citizen/aadharStatus/${email}/${password}`,
      { responseType: 'text' as 'json' }
    );
  }
  public citizenLogout(email: string): Observable<string> {
    return this.http.put<string>(
      `http://localhost:8088/citizen/logout/${email}`,
      null
    );
  }
  public registerCitizen(citizen: any): Observable<string> {
    return this.http.post<string>(`http://localhost:8088/citizen/`, citizen);
  }
  public getWaitingList(): Observable<any> {
    return this.http.get('http://localhost:8088/admin/waiting');
  }
  public approve(email: string): Observable<any> {
    return this.http.put(`http://localhost:8088/admin/approve/${email}`, null);
  }
  public reject(email: string): Observable<any> {
    return this.http.put(`http://localhost:8088/admin/reject/${email}`, null);
  }
  public updateDeadCitizen(email: string): Observable<String> {
    return this.http.put<string>(
      `http://localhost:8088/admin/notAlive/${email}`,
      null
    );
  }
}
