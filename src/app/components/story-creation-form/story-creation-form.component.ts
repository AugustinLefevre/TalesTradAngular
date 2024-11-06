import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { StoryService } from '../../services/story-service/story.service';

@Component({
  selector: 'app-story-creation-form',
  templateUrl: './story-creation-form.component.html',
  styleUrl: './story-creation-form.component.css'
})

export class StoryCreationFormComponent implements OnInit {
  public storyCreationForm!: FormGroup;
  
  constructor(private storyService: StoryService, private fb: FormBuilder){

  }

  ngOnInit(): void {
    this.storyCreationForm = this.fb.group({
      title: ['',  [Validators.required, Validators.minLength(1)]],
      mainIdea: ['']
    });
  }

  onSubmit() {
    const formData: any = this.storyCreationForm.value;
    this.storyService.addStory(formData.title, formData.mainIdea);
  }

}
