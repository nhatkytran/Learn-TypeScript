// type TypeOfLibrary = 'national' | 'academic' | 'public';

enum TypeOfLibrary {
  NATIONAL = 'national',
  ACADEMIC = 'academic',
  PUBLIC = 'public',
}

type Book = {
  title: string;
  pages: number;
  isbn: string;
};

type Member = {
  [key: string]: string;
  name: string;
  phone: string;
};

type Library = {
  name: string;
  address: string;
  numberOfBooks: number;
  type: TypeOfLibrary;
  books: Book[];
  genres: string[];
  members: Member[];
};
