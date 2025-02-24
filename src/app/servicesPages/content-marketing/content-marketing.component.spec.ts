import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentMarketingComponent } from './content-marketing.component';

describe('ContentMarketingComponent', () => {
  let component: ContentMarketingComponent;
  let fixture: ComponentFixture<ContentMarketingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentMarketingComponent]
    });
    fixture = TestBed.createComponent(ContentMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
