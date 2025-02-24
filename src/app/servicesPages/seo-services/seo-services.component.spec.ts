import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SEOServicesComponent } from './seo-services.component';

describe('SEOServicesComponent', () => {
  let component: SEOServicesComponent;
  let fixture: ComponentFixture<SEOServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SEOServicesComponent]
    });
    fixture = TestBed.createComponent(SEOServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
