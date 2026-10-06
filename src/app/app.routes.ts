import { Routes } from '@angular/router';
import { Home } from '../components/home/home';
import { About } from '../components/about/about';
import { Contact } from '../components/contact/contact';
import { NotFound } from '../components/not-found/not-found'
import { Products } from '../components/products/products';
export const routes: Routes = [
  { path: '', component: Home }, // נתיב ברירת מחדל (Home)
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  { path: 'products/:category', component: Products },
  { path: '**', component: NotFound } 
];
