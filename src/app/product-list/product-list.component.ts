import { Component } from '@angular/core';
import { Product } from '../Models/Product';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  selectedProduct:Product;
  productList = [
    {
      id: 1,
      name: "iPhone 13 Pro",
      description: "The latest and greatest iPhone from Apple, featuring a 6.1-inch Super Retina XDR display, A15 Bionic chip, and a triple-lens camera system.",
      brand: "Apple",
      gender: "unisex",
      category: "smartphones",
      size: "varies",
      color: 5,
      price: 799,
      isInInventory: true,
      discounted: 10,
      itemsLeft: 100,
      // imageUrl: "https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iPhone-13-Pro_Colors_09142021_big.jpg.large.jpg",
      imageUrl: "https://i5.walmartimages.com/asr/0a390486-5e56-4cb6-bd75-bfae9cbfa28d.fb530c7586e8ac79c343089cd0816c3a.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      slug: "iphone-13-pro"
    },
    {
      id: 2,
      name: "Samsung Galaxy S21",
      description: "The newest flagship smartphone from Samsung, featuring a 6.2-inch Dynamic AMOLED display, Snapdragon 888 processor, and a triple-lens camera system.",
      brand: "Samsung",
      gender: "unisex",
      category: "smartphones",
      size: "varies",
      color: 4,
      price: 1799,
      isInInventory: false,
      discounted: 30,
      itemsLeft: 50,
      imageUrl: "https://i5.walmartimages.com/asr/2d643099-c36c-4894-a03b-c07e05b44152.0c08187cb9a5c371c112acbf1b2e5bd8.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      slug: "samsung-galaxy-s21"
    },
    {
      id: 3,
      name: "Google Pixel 6",
      description: "The latest smartphone from Google, featuring a 6.4-inch OLED display, Google Tensor processor, and a dual-lens camera system.",
      brand: "Google",
      gender: "unisex",
      category: "smartphones",
      size: "varies",
      color: 2,
      price: 1000,
      isInInventory: true,
      discounted: 30,
      itemsLeft: 75,
      imageUrl: "https://i5.walmartimages.com/asr/72391cba-267b-4a74-afad-3a9d4b42c65f.d886965e1f3827cd54906a265a2d34bf.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      slug: "google-pixel-6"
    },
    {
      id: 4,
      name: "Apple Watch Series 7",
      description: "The latest smartwatch from Apple, featuring a larger display, faster charging, and improved durability.",
      brand: "Apple",
      gender: "unisex",
      category: "accessories",
      size: "41mm or 45mm",
      color: 3,
      price: 600,
      isInInventory: true,
      discounted: 50,
      itemsLeft: 25,
      imageUrl: "https://i5.walmartimages.ca/images/Enlarge/533/392/6000205533392.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      slug: "apple-watch-series-7"
    },
    {
      id: 5,
      name: "Beats Studio Buds",
      description: "True wireless earbuds from Beats, featuring a custom acoustic platform, active noise canceling, and a transparency mode.",
      brand: "Beats",
      gender: "unisex",
      category: "headphones",
      size: "one size",
      color: 1,
      price: 269,
      isInInventory: true,
      discounted: 30,
      itemsLeft: 100,
      imageUrl: "https://i5.walmartimages.ca/images/Enlarge/861/239/6000205861239.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      slug: "beats-studio-buds"
    },
    {
      id: 6,
      name: "JBL Flip 6",
      description: "A portable Bluetooth speaker from JBL, featuring a powerful driver, a long-lasting battery, and a waterproof design.",
      brand: "JBL",
      gender: "unisex",
      category: "speakers",
      size: "6.9 x 2.5 x 2.8 inches",
      color: 6,
      price: 300,
      isInInventory: true,
      discounted: 30,
      itemsLeft: 50,
      imageUrl: "https://i5.walmartimages.ca/images/Enlarge/629/820/6000204629820.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      slug: "jbl-flip-6"
    }
  ];
  font: any;

  totalproductscount = this.productList.length;
  instock = this.productList.filter(p => p.isInInventory == true).length;
  outofstock = this.productList.filter(p => p.isInInventory == false).length;

  selectedradiobutton: string = "all";
  searchText: any = '';
  Getname: any;
  GetInventory: boolean;

  onFilterChanged(value: string) {
    this.selectedradiobutton = value;
  }
  setSearchText(value:string){
    this.searchText = value;
  }

  OnGetDetails(products){
    this.Getname = products;
  }
}
