import { Component, ElementRef, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Story } from '../../models/story.model';
import { StoryService } from '../../services/story-service/story.service';

@Component({
  selector: 'app-all-stories',
  templateUrl: './all-stories.component.html',
  styleUrl: './all-stories.component.css'
})
export class AllStoriesComponent {
  stories: Story[] = [];
  pageIndex: number = 0;

  @ViewChild('sentinel', { static: false }) sentinel!: ElementRef;

  constructor(private storyService: StoryService) {}

  ngAfterViewInit() {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        this.loadStories();
      }
    });

    if (this.sentinel) {
      observer.observe(this.sentinel.nativeElement);
    }
  }

  loadStories() {
    this.storyService.getStories(this.pageIndex).subscribe(datas => {
      this.stories.push(...datas);
      console.log("load stories with page index " + this.pageIndex);
      datas.forEach(element => {
        console.log(element.title);
      });
      
      this.pageIndex++;
    });
  }
}