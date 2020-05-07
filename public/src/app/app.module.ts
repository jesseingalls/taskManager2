import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';
import { MatToolbarModule, MatCardModule, MatButtonModule,
  MatIconModule, MatFormFieldModule,
  MatInputModule, MatDatepickerModule,
  MatNativeDateModule, MatCheckboxModule,
  MatSidenavModule, MatListModule, MatTabsModule,
  MatSelectModule, MatProgressSpinnerModule, MatDialogModule,
  MatTableModule, MatSortModule, MatPaginatorModule, MatSnackBarModule, MatCommonModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatTabsModule,
    MatCardModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatSnackBarModule,
    FlexLayoutModule,
    MatCommonModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
