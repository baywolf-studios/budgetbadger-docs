import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient }    from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DocviewComponent } from './docview/docview.component';
import { MarkdownModule } from 'ngx-markdown';
import { MarkedOptions, MarkedRenderer } from 'ngx-markdown';
 
// function that returns `MarkedOptions` with renderer override
export function markedOptionsFactory(): MarkedOptions {
  const renderer = new MarkedRenderer();
 
  renderer.heading = (text: string, level: number) => {
    console.log('header' + level);

    let adobeClass: string;
    switch(level) { 
      case 1: { 
        adobeClass = 'spectrum-Heading spectrum-Heading--XL';
        break; 
      } 
      case 2: { 
        adobeClass = 'spectrum-Heading spectrum-Heading--L';
        break; 
      } 
      case 3: { 
        adobeClass = 'spectrum-Heading spectrum-Heading--M';
        break; 
      } 
      case 4: { 
        adobeClass = 'spectrum-Heading spectrum-Heading--S';
        break; 
      } 
      case 5: {
        adobeClass = 'spectrum-Heading spectrum-Heading--XS'; 
        break; 
      } 
      case 6: { 
        adobeClass = 'spectrum-Heading spectrum-Heading--XXS';
        break; 
      } 
      default: { 
        adobeClass = 'spectrum-Heading';
        break; 
      }
    }

    return `<h${level} class="${adobeClass}">${text}</h${level}>`;
  }
 
  return {
    renderer: renderer
  };
}

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DocviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MarkdownModule.forRoot(
      { 
        loader: HttpClient, 
        markedOptions: {
          provide: MarkedOptions,
          useFactory: markedOptionsFactory,
        } 
      }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
