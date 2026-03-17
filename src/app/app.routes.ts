import { Routes } from '@angular/router';
import { Homes } from './homes/homes';
import { Details } from './details/details';
export const routes: Routes = [
{
path: '',
component: Homes,
title: 'Home page',
},
{
path: 'details',
component: Details,
title: 'Home Details'
},
];
