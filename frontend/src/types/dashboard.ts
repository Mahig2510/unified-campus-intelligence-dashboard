export interface Book {
  _id: string;
  title: string;
  author: string;
  availableCopies: number;
  location: string;
}

export interface Event {
  _id: string;
  title: string;
  venue: string;
  date: string;
  category: string;
}

export interface MenuItem {
  _id: string;
  itemName: string;
  price: number;
  mealType: string;
}

export interface Resource {
  _id: string;
  title: string;
  subject: string;
  resourceType: string;
}
