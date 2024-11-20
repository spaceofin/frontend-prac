type Section = {
  id: number;
  name: string;
};

type Book = {
  id: number;
  title: string;
  sectionId: number;
};

type BookComment = {
  id: number;
  comment: string;
  bookId: number;
};
