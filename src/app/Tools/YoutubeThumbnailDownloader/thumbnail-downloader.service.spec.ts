import { TestBed } from '@angular/core/testing';

import { ThumbnailDownloaderService } from './thumbnail-downloader.service';

describe('ThumbnailDownloaderService', () => {
  let service: ThumbnailDownloaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThumbnailDownloaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
