// SECTION: MENU ITEM MODEL
export interface MenuItem {
    
  id: number;
  name: string;
  price: number;
  image: string;
  category: 'burger' | 'beverage' | 'side' | 'dessert';
  prepTime?: string; 

}