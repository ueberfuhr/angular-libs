import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitlabClientComponent } from './gitlab-client.component';

describe('GitlabClientComponent', () => {
  let component: GitlabClientComponent;
  let fixture: ComponentFixture<GitlabClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GitlabClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GitlabClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
