# Readme

Made in Angular 15 and libs works in same framework version, didn't test that with vanilla JS

## Usage Example

Import the `ProductCardData` into your app module

```javascript
import { ProductCardComponent } from "matzap-product-card-component-angular";
```

```javascript
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ProductCardComponent],
  providers: [],
  bootstrap: [AppComponent],
})
```

No you can use component directive

```javascript
<app-product-card></app-product-card>
```

You can pass own properties

```javascript
<app-product-card [data]="cardData" [imageURL]="imageURL" [imageAlt]="imageAlt"></app-product-card>
```

To prepare data use model

```javascript
import { ProductCardData } from "matzap-product-card-component-angular";

export interface ProductCardData {
  title: string;
  description: string;
  primaryInput: string;
  secondaryInput: string;
  actionName: string;
}
```

imageURL and imageAlt should be `string` type
