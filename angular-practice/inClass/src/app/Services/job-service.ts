import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

export interface Job {
  id: number;
  by: string;
  time: number;
  title: string;
  url?: string;
}

@Injectable({
  providedIn: 'root',
})
export class JobService {
  private http = inject(HttpClient)
  private readonly jobsUrl = 'https://hacker-news.firebaseio.com/v0/jobstories.json';

  getJobs(){
    return this.http.get<number[]>(this.jobsUrl);
  }

  getJobDetail(id: number){
    return this.http.get<Job>(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
  }
}
