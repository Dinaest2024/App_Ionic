import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  items: any[] = [
    {
      id: '1',
      name: 'Globes',
      price: 10000,
      status: true,
      rating: 4.9,
      cover: 'assets/gifts/product1.jpg',
      description: 'Brighten up any space with our vibrant and elegant decorative globes.'
    },
    {
      id: '2',
      name: 'Caffee',
      price: 5000,
      status: true,
      rating: 4.7,
      cover: 'assets/gifts/producto2.jpg',
      description: 'Enjoy the unique aroma and taste of our premium, perfectly roasted coffee.'
    },
    {
      id: '3',
      name: 'White',
      price: 15000,
      status: true,
      rating: 4.9,
      cover: 'assets/gifts/producto3.jpg',
      description: 'A timeless classic: high-quality white clothing for any special or casual occasion.'
    },
    {
      id: '4',
      name: 'Shoes',
      price: 10000,
      status: true,
      rating: 4.8,
      cover: 'assets/gifts/producto4.jpg',
      description: 'Walk in style and comfort with our modern and versatile shoe collection.'
    },
    {
      id: '5',
      name: 'Flowers',
      price: 35000,
      status: true,
      rating: 4.5,
      cover: 'assets/gifts/producto5.jpg',
      description: 'Surprise someone special with a beautiful bouquet of fresh and fragrant flowers.'
    },
    {
      id: '6',
      name: 'Bag',
      price: 20000,
      status: true,
      rating: 4.9,
      cover: 'assets/gifts/producto6.jpg',
      description: 'Carry your essentials in style with our elegant and functional bags.'
    },
    {
      id: '7',
      name: 'Box M',
      price: 40000,
      status: true,
      rating: 4.6,
      cover: 'assets/gifts/producto7.jpg',
      description: 'Medium storage box, perfect for organizing your belongings with a sophisticated touch.'
    },
    {
      id: '8',
      name: 'Radio',
      price: 10000,
      status: true,
      rating: 4.9,
      cover: 'assets/gifts/producto8.jpg',
      description: 'Enjoy the best music and news with our high-quality portable radio.'
    },
    {
      id: '9',
      name: 'Clothes',
      price: 25000,
      status: true,
      rating: 4.6,
      cover: 'assets/gifts/producto9.jpg',
      description: 'Explore our fashionable clothing collection, designed for comfort and everyday style.'
    },
    {
      id: '10',
      name: 'Clothes',
      price: 20000,
      status: true,
      rating: 4.7,
      cover: 'assets/gifts/producto10.jpg',
      description: 'Versatile, high-quality garments to complement your wardrobe with elegance.'
    },
    {
      id: '11',
      name: 'Ice',
      price: 20000,
      status: true,
      rating: 4.6,
      cover: 'assets/gifts/producto14.jpg',
      description: 'Premium ice cooler to keep your drinks cold for any special occasion.'
    },
    {
      id: '12',
      name: 'Headphones',
      price: 50000,
      status: true,
      rating: 4.5,
      cover: 'assets/gifts/producto11.jpg',
      description: 'Experience immersive sound with our high-fidelity headphones.'
    },
    {
      id: '13',
      name: 'Box Té',
      price: 35000,
      status: true,
      rating: 4.7,
      cover: 'assets/gifts/producto12.jpg',
      description: 'Tea box with a selection of exclusive flavors for true tea lovers.'
    },
    {
      id: '14',
      name: 'Box',
      price: 8500,
      status: true,
      rating: 4.5,
      cover: 'assets/gifts/producto13.jpg',
      description: 'The perfect gift box for storing memories and special keepsakes.'
    },
  ];

  coupons: any[] = [
    {
      id: "1",
      code: "SAVE",
      discount: 10,
      isPercentage: true,
      description: "Get 10% off",
      isActive: true,
      expiryDate: "2024-06-30",
      minimumOrderAmount: 50,
    },
    {
      id: "2",
      code: "BONUS",
      discount: 50,
      isPercentage: false,
      description: "Get 50% off ", 
      isActive: true,
      expiryDate: "2024-12-31",
    },
    {
      id: "3",
      code: "BUNDLEDEAL",
      discount: 20,
      isPercentage: true,
      description: "Get 50% off",
      isActive: false,
      expiryDate: "2024-09-15",
    },
    {
      id: "4",
      code: "GIFT",
      discount: 30,
      isPercentage: true,
      description: "Get 30% off",
      isActive: true,
      expiryDate: "2024-12-31",
      minimumOrderAmount: 5000,
    },
  ];

  constructor() { }

  getCoupons() {
    return this.coupons.filter(coupon => coupon.isActive);
  }
}
