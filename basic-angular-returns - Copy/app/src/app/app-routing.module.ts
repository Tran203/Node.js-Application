import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SuccessComponent } from './success/success.component'; // Import the new component

const routes: Routes = [
  { path: '', component: AppComponent }, // Default route to the form
  { path: 'success', component: SuccessComponent }, // Route to the success page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
