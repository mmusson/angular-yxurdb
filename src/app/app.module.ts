import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { programReducer } from './program.reducer';
import { MyProgramsComponent } from './my-programs/my-programs.component';
import { appReducers } from '.';

@NgModule({
  imports: [BrowserModule, StoreModule.forRoot(appReducers)],
  declarations: [AppComponent, MyProgramsComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
