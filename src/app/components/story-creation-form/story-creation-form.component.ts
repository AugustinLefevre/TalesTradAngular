import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { StoryService } from '../../services/story-service/story.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-story-creation-form',
  templateUrl: './story-creation-form.component.html',
  styleUrl: './story-creation-form.component.css'
})

export class StoryCreationFormComponent implements OnInit {
  public storyCreationForm!: FormGroup;
  
  constructor(private storyService: StoryService, private fb: FormBuilder, private router: Router){

  }

  ngOnInit(): void {
    this.storyCreationForm = this.fb.group({
      title: ['',  [Validators.required, Validators.minLength(1)]],
      mainIdea: ['']
    });
  }

  async onSubmit() {
    const formData: any = this.storyCreationForm.value;
    var storyId = await this.storyService.addStory(formData.title, formData.mainIdea);
    console.log("story id :" + storyId)
    this.router.navigate(['/view-story', storyId]);
  }

}
