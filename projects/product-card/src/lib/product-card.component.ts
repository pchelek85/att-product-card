import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardData } from './product-card.model';

const sampleData: ProductCardData = {
  title: 'Add your own headline here and explain your product',
  description:
    'There is no one who loves pain itself, who seeks afte simply because it is pain',
  primaryInput: 'Placeholder',
  secondaryInput: 'Placeholder',
  actionName: 'Button',
};

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  /** Some description how to use ProductCardData interface */
  @Input() data: ProductCardData = sampleData;

  /** Assuming that component displays image */
  @Input() imageURL: string | null = null;

  /** Accesibility reason */
  @Input() imageAlt: string | null = null;
}
