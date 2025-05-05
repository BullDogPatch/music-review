export interface User {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  bio: string;
}

export interface Post {
  id: number;
  title: string;
  image: string;
  description: string;
  likes: number;
}
