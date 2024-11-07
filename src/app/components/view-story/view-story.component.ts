import { Component } from '@angular/core';
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
  storyId: string | null = null;

  constructor(private route: ActivatedRoute, private storyService: StoryService) {}

  ngOnInit(): void {
    this.storyId = this.route.snapshot.paramMap.get('id');
      if(this.storyId != null){
        this.storyService.getStoryById(this.storyId).subscribe(datas =>{
          this.title = datas.title;
          this.main_idea = datas.mainIdea;
        });
      }
  }

}
