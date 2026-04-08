import { Locator, Page } from "@playwright/test";
import { faker } from "@faker-js/faker";
import { delay } from "rxjs-compat/operator/delay";
import { Browser } from "@playwright/test";



export class WebPortalNavigationPage {

 readonly page: Page

 constructor(page:Page){
     
     this.page=page
 }

 

 }
