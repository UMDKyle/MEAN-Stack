import { Component, inject, OnInit, signal, computed } from '@angular/core';
import { Job, JobService } from '../Services/job-service';
import { forkJoin, switchMap } from 'rxjs';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-job-board',
  imports: [DatePipe],
  templateUrl: './job-board.html',
  styleUrl: './job-board.scss',
})
export class JobBoard implements OnInit {
  private jobService = inject(JobService);

  allIds = signal<number[]>([]);
  jobs = signal<Job[]>([]);
  currentIndex = signal(0);
  readonly pageSize = 6;
  isLoading = signal(false);

  hasMore = computed(() => this.currentIndex() < this.allIds().length);

  ngOnInit(): void {
    this.jobService.getJobs().pipe(
      switchMap(ids => {
        this.allIds.set(ids);
        const nextIds = ids.slice(this.currentIndex(), this.currentIndex() + this.pageSize);
        const jobsObs = nextIds.map(id => this.jobService.getJobDetail(id));
        return forkJoin(jobsObs);
      })
    ).subscribe({
      next: newJobs => {
        this.jobs.update(prev => [...prev, ...newJobs]);
        this.currentIndex.update(i => i + this.pageSize);
        this.isLoading.set(false);
      },
      error: err => console.error('ngOnInit error:', err)
    });
  }

  loadMore(): void {
    const nextIds = this.allIds().slice(this.currentIndex(), this.currentIndex() + this.pageSize);
    const requests = nextIds.map(id => this.jobService.getJobDetail(id));
    this.isLoading.set(true);
    forkJoin(requests).subscribe(newJobs => {
      this.jobs.update(prev => [...prev, ...newJobs]);
      this.currentIndex.update(i => i + this.pageSize);
      this.isLoading.set(false);
    });
  }
}
