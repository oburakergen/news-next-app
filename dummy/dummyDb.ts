// create dummyDb interface and export it as default export
interface IBlogPost {
  name: string;
  description: string;
  image: {
    url: string;
    width: number;
    height: number;
  };
  slug: string;
  id: number;
}

export const blogPosts: Array<IBlogPost> = [
  {
    name: "Product 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultrices aliquam, nunc nisl ultrices nunc, vitae aliquam nisl nunc eu nisl. Sed vitae nisl eget nisl aliquam ultrices. Sed vitae nisl eget nisl aliquam ultrices.",
    image: {
      url: "https://images.unsplash.com/photo-1612837017391-0e3b5a2b0b0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdCUyMGJsb29kJTIwY2FyZCUyMHN0b3J5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      width: 1000,
      height: 1000,
    },
    slug: "product-1",
    id: 1,
  },
  {
    name: "Product 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultrices aliquam, nunc nisl ultrices nunc, vitae aliquam nisl nunc eu nisl. Sed vitae nisl eget nisl aliquam ultrices. Sed vitae nisl eget nisl aliquam ultrices.",
    image: {
      url: "https://images.unsplash.com/photo-1612837017391-0e3b5a2b0b0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdCUyMGJsb29kJTIwY2FyZCUyMHN0b3J5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      width: 1000,
      height: 1000,
    },
    slug: "product-2",
    id: 2,
  },
  {
    name: "Product 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultrices aliquam, nunc nisl ultrices nunc, vitae aliquam nisl nunc eu nisl. Sed vitae nisl eget nisl aliquam ultrices. Sed vitae nisl eget nisl aliquam ultrices.",
    image: {
      url: "https://images.unsplash.com/photo-1612837017391-0e3b5a2b0b0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdCUyMGJsb29kJTIwY2FyZCUyMHN0b3J5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      width: 1000,
      height: 1000,
    },
    slug: "product-3",
    id: 3,
  },
];

// create dummy db array and export example menu items as default export. Include name, slug, and id
interface IMenuItem {
  name: string;
  slug: string;
  id: number;
}

export const menuItems: Array<IMenuItem> = [
  {
    name: "Home",
    slug: "/",
    id: 1,
  },
  {
    name: "About",
    slug: "/about",
    id: 2,
  },
  {
    name: "Contact",
    slug: "/contact",
    id: 3,
  },
  {
    name: "Blog",
    slug: "/blog",
    id: 4,
  },
  {
    name: "Shop",
    slug: "/shop",
    id: 5,
  },
];
