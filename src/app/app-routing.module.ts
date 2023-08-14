import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxjsLearningComponent } from './rxjs-learning/rxjs-learning.component';
import { HelloComponent } from './hello/hello.component';

const routes: Routes = [
  {
    path: 'entry',
    component: RxjsLearningComponent,
    children: [
      {
        path: 'helo',
        component: HelloComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
