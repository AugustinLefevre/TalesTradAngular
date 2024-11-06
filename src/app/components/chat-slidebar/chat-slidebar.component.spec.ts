import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatSlidebarComponent } from './chat-slidebar.component';

describe('ChatSlidebarComponent', () => {
  let component: ChatSlidebarComponent;
  let fixture: ComponentFixture<ChatSlidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChatSlidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChatSlidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
