import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbnailDownloaderComponent } from './thumbnail-downloader.component';

describe('ThumbnailDownloaderComponent', () => {
  let component: ThumbnailDownloaderComponent;
  let fixture: ComponentFixture<ThumbnailDownloaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThumbnailDownloaderComponent]
    });
    fixture = TestBed.createComponent(ThumbnailDownloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
