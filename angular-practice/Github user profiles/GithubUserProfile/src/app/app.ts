import { Component, computed, inject, signal } from '@angular/core';
import { GetUser } from './Services/get-user';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { user } from './user';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private service = inject(GetUser);
  private fb = inject(FormBuilder);
  searchForm = this.fb.group({
    username:['',[Validators.required, Validators.pattern(/^[a-zA-Z0-9-]+$/)]],
    filter:[]
  })
  users= signal<user[]>([]);
  filterText = signal('');
  onFilter(event: Event) {
    this.filterText.set((event.target as HTMLInputElement).value);
  }
  search(name:string){
    return this.service.getUsers(name).subscribe(res =>{
      this.users.set(res.items);
    });
  }
  filteredUsers = computed(()=>{
    const text = this.filterText().toLowerCase();
    if (!text){
      return this.users();
    }
    return this.users().filter(u=>{
      if (u.id.toString().includes(text) || u.login.toLowerCase().includes(text) || u.html_url.toLowerCase().includes(text)){
        return true;
      }
      return false;
    })
  })
}
