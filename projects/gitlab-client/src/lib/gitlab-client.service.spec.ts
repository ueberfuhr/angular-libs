import { TestBed } from '@angular/core/testing';

import { GitlabClientService } from './gitlab-client.service';

describe('GitlabClientService', () => {
  let service: GitlabClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GitlabClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
