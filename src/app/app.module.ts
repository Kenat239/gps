import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Sockets
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

const config: SocketIoConfig = {
  url: environment.wsUrl, options: {}
};

// Rutas
import { AppRoutingModule } from './app-routing.module';

// Interceptor
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './compartidos/header/header.component';
import { SidebarComponent } from './compartidos/sidebar/sidebar.component';
import { FooterComponent } from './compartidos/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginasComponent } from './paginas/paginas.component';
import { AuthInterceptor } from './clases/interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    PaginasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SocketIoModule.forRoot(config),
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
