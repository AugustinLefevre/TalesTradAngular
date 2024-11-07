import { Component } from '@angular/core';
import { Story } from '../../models/story.model';
import { ActivatedRoute } from '@angular/router';
import { StoryService } from '../../services/story-service/story.service';

@Component({
  selector: 'app-view-story',
  templateUrl: './view-story.component.html',
  styleUrl: './view-story.component.css'
})
export class ViewStoryComponent {

  title: string = "";
  main_idea: string = "";
  id: string | null = null;

  constructor(private route: ActivatedRoute, private storyService: StoryService) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
      if(this.id != null){
        this.storyService.getStoryById(this.id).subscribe(datas =>{
          this.title = datas.title;
          this.main_idea = datas.mainIdea;
        });
      }
  }

}
