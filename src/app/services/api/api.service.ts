import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  items: any[] = [
    {
      id: '1',
      name: 'Set Cameras',
      price: 10000,
      status: true,
      rating: 4.9,
      cover: 'assets/gifts/product1.jpg',
      description: 'Unbox joy and excitement with our carefully curated Surprise Gift Basket, filled with delightful surprises.'
    },
    {
      id: '2',
      name: 'Luxury Chocolate Box',
      price: 5000,
      status: true,
      rating: 4.7,
      cover: 'assets/gifts/producto2.jpg',
      description: 'Indulge in the rich and decadent flavors of our Luxury Chocolate Box, a perfect treat for any occasion.'
    },
    {
      id: '3',
      name: 'OTT Subscription',
      price: 15000,
      status: true,
      rating: 4.9,
      cover: 'assets/gifts/producto3.jpg',
      description: 'Immerse yourself in a world of entertainment with our exclusive OTT Subscription gift.'
    },
    {
      id: '4',
      name: 'Designer Handbag',
      price: 10000,
      status: true,
      rating: 4.8,
      cover: 'assets/gifts/producto4.jpg',
      description: 'Elevate your style with our chic and fashionable Designer Handbag, a statement piece for any ensemble.'
    },
    {
      id: '5',
      name: 'Personalized Mug',
      price: 35000,
      status: true,
      rating: 4.5,
      cover: 'assets/gifts/producto5.jpg',
      description: 'Start your day with a touch of personalization using our delightful Personalized Mug.'
    },
    {
      id: '6',
      name: 'Perfume Set',
      price: 20000,
      status: true,
      rating: 4.9,
      cover: 'assets/gifts/producto6.jpg',
      description: 'Discover the essence of luxury with our Perfume Set, a captivating blend of enchanting fragrances.'
    },
    {
      id: '7',
      name: 'Jewelry Box',
      price: 40000,
      status: true,
      rating: 4.6,
      cover: 'assets/gifts/producto7.jpg',
      description: 'Store your precious jewels in style with our exquisitely designed Jewelry Box, a symbol of elegance.'
    },
    {
      id: '8',
      name: 'Romantic Dinner Set',
      price: 10000,
      status: true,
      rating: 4.9,
      cover: 'assets/gifts/producto8.jpg',
      description: 'Create magical moments with our Romantic Dinner Set, perfect for a candlelit evening with your loved one.'
    },
    {
      id: '9',
      name: 'Leather Wallet',
      price: 25000,
      status: true,
      rating: 4.6,
      cover: 'assets/gifts/producto9.jpg',
      description: 'Upgrade your accessory collection with our stylish and durable Leather Wallet, a blend of functionality and fashion.'
    },
    {
      id: '10',
      name: 'Phone Case',
      price: 20000,
      status: true,
      rating: 4.7,
      cover: 'assets/gifts/producto10.jpg',
      description: 'Protect your device in style with our trendy Phone Case, personalized for the modern individual.'
    },
    {
      id: '11',
      name: 'Diamond Jewelry',
      price: 20000,
      status: true,
      rating: 4.6,
      cover: 'assets/gifts/producto14.jpg',
      description: 'Adorn yourself with elegance and grace with our exquisite Diamond Jewelry collection.'
    },
    {
      id: '12',
      name: 'Leather Travel Set',
      price: 50000,
      status: true,
      rating: 4.5,
      cover: 'assets/gifts/producto11.jpg',
      description: 'Embark on journeys in style with our Leather Travel Set, crafted for the modern-day explorer.'
    },
    {
      id: '13',
      name: 'Modern Wall Clock',
      price: 35000,
      status: true,
      rating: 4.7,
      cover: 'assets/gifts/producto12.jpg',
      description: 'Enhance your living space with our Modern Wall Clock, a blend of functionality and contemporary design.'
    },
    {
      id: '14',
      name: 'Eco-friendly Planters',
      price: 8500,
      status: true,
      rating: 4.5,
      cover: 'assets/gifts/producto13.jpg',
      description: 'Bring nature indoors with our Eco-friendly Planters, designed for the eco-conscious and nature enthusiasts.'
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
