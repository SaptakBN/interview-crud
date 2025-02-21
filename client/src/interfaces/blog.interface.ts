export interface Blog {
  _id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  author: {
    id: string;
    email: string;
  };
}

export interface BlogArg {
  title: string;
  content: string;
}
