import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar/navbar.component';
import { HomeComponent } from './core/home/home/home.component';
import { ServicesComponent } from './services/services.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FooterComponent } from './core/footer/footer.component';
import { SEOServicesComponent } from './servicesPages/seo-services/seo-services.component';
import { WebDevelopmentComponent } from './servicesPages/web-development/web-development.component';
import { SocialMediaComponent } from './servicesPages/social-media/social-media.component';
import { AdsComponent } from './servicesPages/ads/ads.component';
import { EmailMarketingComponent } from './servicesPages/email-marketing/email-marketing.component';
import { ContentMarketingComponent } from './servicesPages/content-marketing/content-marketing.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ImageCompressorComponent } from './Tools/ImageCompressor/image-compressor/image-compressor.component';
import { ImageConverterComponent } from './Tools/ImageConverter/image-converter/image-converter.component';
import { ThumbnailDownloaderComponent } from './Tools/YoutubeThumbnailDownloader/thumbnail-downloader/thumbnail-downloader.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ServicesComponent,
    ContactusComponent,
    AboutUsComponent,
    FooterComponent,
    SEOServicesComponent,
    WebDevelopmentComponent,
    SocialMediaComponent,
    AdsComponent,
    EmailMarketingComponent,
    ContentMarketingComponent,
    ImageCompressorComponent,
    ImageConverterComponent,
    ThumbnailDownloaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
