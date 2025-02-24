import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SEOServicesComponent } from './servicesPages/seo-services/seo-services.component';
import { WebDevelopmentComponent } from './servicesPages/web-development/web-development.component';
import { SocialMediaComponent } from './servicesPages/social-media/social-media.component';
import { AdsComponent } from './servicesPages/ads/ads.component';
import { EmailMarketingComponent } from './servicesPages/email-marketing/email-marketing.component';
import { ContentMarketingComponent } from './servicesPages/content-marketing/content-marketing.component';
import { ImageCompressorComponent } from './Tools/ImageCompressor/image-compressor/image-compressor.component';
import { ImageConverterComponent } from './Tools/ImageConverter/image-converter/image-converter.component';
import { ThumbnailDownloaderComponent } from './Tools/YoutubeThumbnailDownloader/thumbnail-downloader/thumbnail-downloader.component';

const routes: Routes = [
  { path:  '', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactusComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'services/seo-services', component: SEOServicesComponent },
  { path: 'services/web-development', component: WebDevelopmentComponent},
  { path: 'services/social-media-marketing', component:SocialMediaComponent},
  { path: 'services/ads', component:AdsComponent},
  { path: 'services/email-marketing', component: EmailMarketingComponent},
  { path: 'services/content-marketing', component:ContentMarketingComponent},
  { path: 'tools/image-compressor', component:ImageCompressorComponent},
  { path: 'tools/image-converter', component:ImageConverterComponent},
  { path: 'tools/thumbnail-downloader', component:ThumbnailDownloaderComponent},
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })], // Hash routing disabled here
  exports: [RouterModule]
})
export class AppRoutingModule { }
