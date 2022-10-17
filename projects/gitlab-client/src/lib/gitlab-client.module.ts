import {ModuleWithProviders, NgModule} from '@angular/core';
import {GitlabConfig, GitlabConfigProvider} from './config/gitlab-config.model';
import {GitlabService} from './services/gitlab.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule
  ]
})
export class GitlabClientModule {

  static forRoot(gitlabConfigFactory: () => GitlabConfig): ModuleWithProviders<GitlabClientModule> {
    return {
      ngModule: GitlabClientModule,
      providers: [
        {provide: GitlabConfigProvider, useValue: new GitlabConfigProvider(gitlabConfigFactory)},
        GitlabService
      ]
    }
  }

}
