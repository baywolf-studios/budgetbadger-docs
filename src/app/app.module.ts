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
 
  renderer.blockquote = (quote: string) => {
    return `<div class="spectrum-Well">${quote}</div>`;
  }

  renderer.paragraph = (text: string) => {
    return `<p class="spectrum-Body spectrum-Body--M">${text}</p>`
  }

  renderer.hr = () => {
    return '<hr class="spectrum-Rule spectrum-Rule--large"></hr>';
  }

  renderer.code = (code: string, language: string, isEscaped: boolean) => {
    return `<pre class="spectrum-Well"><code class="spectrum-Code spectrum-Code--M">${code}</code></pre>`;
  }

  renderer.codespan = (code:string) => {
    return `<pre class="spectrum-Well"><code class="spectrum-Code spectrum-Code--M">${code}</code></pre>`;
  }

  renderer.link = (href: string, title: string, text: string) => {
    return `<a href="${href}" class="spectrum-Link">${text}</a>`
  }

  renderer.table = (header: string, body: string) => {
    return `<table class="spectrum-Table"><thead class="spectrum-Table-head">${header}</thead><tbody class="spectrum-Table-body">${body}</tbody></table>`;
  }

  renderer.tablerow = (content: string) => {
    return `<tr class="spectrum-Table-row">${content}</tr>`;
  }

  renderer.tablecell = (content: string, flags) => {
    if (flags.header) {
      return `<th align="${flags.align}" class="spectrum-Table-headCell">${content}</th>`;
    }
    else {
      return `<td align="${flags.align}" class="spectrum-Table-cell">${content}</td>`;
    }
  }

  renderer.listitem = (text: string) => {
    return `<li class="spectrum-Body spectrum-Body--M">${text}</li>`;
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
