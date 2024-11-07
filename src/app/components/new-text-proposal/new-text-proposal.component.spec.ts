import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTextProposalComponent } from './new-text-proposal.component';

describe('NewTextProposalComponent', () => {
  let component: NewTextProposalComponent;
  let fixture: ComponentFixture<NewTextProposalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewTextProposalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewTextProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
