import { Injectable } from '@angular/core';

export interface Products {
  imagePath: string;
  category: string;
  brandName: string;
  price: number;
}

@Injectable({
  providedIn: 'root',
})
export class ListOfProductsService {
  public products: Products[] = [
    {
      imagePath:
        'https://contents.mediadecathlon.com/p2052233/k$97717df7a83d287ebc3b27225aed2d6d/sq/8602244.jpg?format=auto&f=800x0&quality=40',
      category: 'Snowboard',
      brandName: 'Deska',
      price: 230,
    },
    {
      imagePath:
        'https://www.airtracks.de/media/image/31/ba/53/herren-damen-snowboard-high-m-hybrid-rocker-camber-zero-flat-freeride-freestyle-140-145-150-155-152-cm-highm1_600x600.jpg',
      category: 'Snowboard',
      brandName: 'Deska',
      price: 260,
    },
    {
      imagePath:
        'https://contents.mediadecathlon.com/p2052233/k$97717df7a83d287ebc3b27225aed2d6d/sq/8602244.jpg?format=auto&f=800x0&quality=40',
      category: 'Snowboard',
      brandName: 'Deska',
      price: 230,
    },
    {
      imagePath:
        'https://www.airtracks.de/media/image/31/ba/53/herren-damen-snowboard-high-m-hybrid-rocker-camber-zero-flat-freeride-freestyle-140-145-150-155-152-cm-highm1_600x600.jpg',
      category: 'Snowboard',
      brandName: 'Deska',
      price: 260,
    },
    {
      imagePath:
        'https://contents.mediadecathlon.com/p2052233/k$97717df7a83d287ebc3b27225aed2d6d/sq/8602244.jpg?format=auto&f=800x0&quality=40',
      category: 'Snowboard',
      brandName: 'Deska',
      price: 230,
    },
  ];
}
