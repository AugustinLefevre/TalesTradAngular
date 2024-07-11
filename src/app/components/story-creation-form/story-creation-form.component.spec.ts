import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryCreationFormComponent } from './story-creation-form.component';

describe('StoryCreationFormComponent', () => {
  let component: StoryCreationFormComponent;
  let fixture: ComponentFixture<StoryCreationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoryCreationFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StoryCreationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
