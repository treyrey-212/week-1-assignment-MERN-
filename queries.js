#Find all books in a specific genre
plp_bookstore> db.books.find({genre:"Fiction"})
[
  {
    _id: ObjectId('685d44a785b36b735650eb67'),
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Fiction',
    published_year: 1960,
    price: 12.99,
    in_stock: true,
    pages: 336,
    publisher: 'J. B. Lippincott & Co.'
  },
  {
    _id: ObjectId('685d44a785b36b735650eb69'),
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: 'Fiction',
    published_year: 1925,
    price: 9.99,
    in_stock: true,
    pages: 180,
    publisher: "Charles Scribner's Sons"
  },
  {
    _id: ObjectId('685d44a785b36b735650eb6c'),
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    genre: 'Fiction',
    published_year: 1951,
    price: 8.99,
    in_stock: true,
    pages: 224,
    publisher: 'Little, Brown and Company'
  },
  {
    _id: ObjectId('685d44a785b36b735650eb70'),
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    genre: 'Fiction',
    published_year: 1988,
    price: 10.99,
    in_stock: true,
    pages: 197,
    publisher: 'HarperOne'
  }
]

#Find books published after a certain year
plp_bookstore> db.books.find({published_year:{$gt:1932}})
[
  {
    _id: ObjectId('685d44a785b36b735650eb67'),
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Fiction',
    published_year: 1960,
    price: 12.99,
    in_stock: true,
    pages: 336,
    publisher: 'J. B. Lippincott & Co.'
  },
  {
    _id: ObjectId('685d44a785b36b735650eb68'),
    title: '1984',
    author: 'George Orwell',
    genre: 'Dystopian',
    published_year: 1949,
    price: 10.99,
    in_stock: true,
    pages: 328,
    publisher: 'Secker & Warburg'
  },
  {
    _id: ObjectId('685d44a785b36b735650eb6b'),
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    genre: 'Fantasy',
    published_year: 1937,
    price: 14.99,
    in_stock: true,
    pages: 310,
    publisher: 'George Allen & Unwin'
  },
  {
    _id: ObjectId('685d44a785b36b735650eb6c'),
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    genre: 'Fiction',
    published_year: 1951,
    price: 8.99,
    in_stock: true,
    pages: 224,
    publisher: 'Little, Brown and Company'
  },
  {
    _id: ObjectId('685d44a785b36b735650eb6e'),
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    genre: 'Fantasy',
    published_year: 1954,
    price: 19.99,
    in_stock: true,
    pages: 1178,
    publisher: 'Allen & Unwin'
  },
  {
    _id: ObjectId('685d44a785b36b735650eb6f'),
    title: 'Animal Farm',
    author: 'George Orwell',
    genre: 'Political Satire',
    published_year: 1945,
    price: 8.5,
    in_stock: false,
    pages: 112,
    publisher: 'Secker & Warburg'
  },
  {
    _id: ObjectId('685d44a785b36b735650eb70'),
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    genre: 'Fiction',
    published_year: 1988,
    price: 10.99,
    in_stock: true,
    pages: 197,
    publisher: 'HarperOne'
  }
]


#Find books by a specific author
plp_bookstore> db.books.find({author:"Jane Austen"})
[
  {
    _id: ObjectId('685d44a785b36b735650eb6d'),
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    genre: 'Romance',
    published_year: 1813,
    price: 7.99,
    in_stock: true,
    pages: 432,
    publisher: 'T. Egerton, Whitehall'
  }
]


#Update the price of a specific book
plp_bookstore> db.books.updateOne({title:"Pride and Prejudice"}, {$set:{price:14.99}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}


#Delete a book by its title
plp_bookstore> db.books.deleteOne({title:"The Hobbit"})
{ acknowledged: true, deletedCount: 1 }

#Advanced Queries
#Write a query to find books that are both in stock and published after 2010
plp_bookstore> db.books.find({inStock:true, published_year:{$gt:2010}})
plp_bookstore>

#Use projection to return only the title, author, and price fields in your queries
plp_bookstore> db.books.find({},{title:1, author:1, price:1, _id:0})
[
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    price: 12.99
  },
  { title: '1984', author: 'George Orwell', price: 10.99 },
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    price: 9.99
  },
  { title: 'Brave New World', author: 'Aldous Huxley', price: 11.5 },
  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    price: 8.99
  },
  { title: 'Pride and Prejudice', author: 'Jane Austen', price: 14.99 },
  {
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    price: 19.99
  },
  { title: 'Animal Farm', author: 'George Orwell', price: 8.5 },
  { title: 'The Alchemist', author: 'Paulo Coelho', price: 10.99 }
]

#Implement sorting to display books by price (both ascending and descending)
#ascending order
plp_bookstore> db.books.find().sort({price:1})
[
  {
    _id: ObjectId('685d44a785b36b735650eb6f'),
    title: 'Animal Farm',
    author: 'George Orwell',
    genre: 'Political Satire',
    published_year: 1945,
    price: 8.5,
    in_stock: false,
    pages: 112,
    publisher: 'Secker & Warburg'
  },
  {
    _id: ObjectId('685d44a785b36b735650eb6c'),
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    genre: 'Fiction',
    published_year: 1951,
    price: 8.99,
    in_stock: true,
    pages: 224,
    publisher: 'Little, Brown and Company'
  },
  {
    _id: ObjectId('685d44a785b36b735650eb69'),
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: 'Fiction',
    published_year: 1925,
    price: 9.99,
    in_stock: true,
    pages: 180,
    publisher: "Charles Scribner's Sons"
  },
  {
    _id: ObjectId('685d44a785b36b735650eb68'),
    title: '1984',
    author: 'George Orwell',
    genre: 'Dystopian',
    published_year: 1949,
    price: 10.99,
    in_stock: true,
    pages: 328,
    publisher: 'Secker & Warburg'
  },
  {
    _id: ObjectId('685d44a785b36b735650eb70'),
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    genre: 'Fiction',
    published_year: 1988,
    price: 10.99,
    in_stock: true,
    pages: 197,
    publisher: 'HarperOne'
  },
  {
    _id: ObjectId('685d44a785b36b735650eb6a'),
    title: 'Brave New World',
    author: 'Aldous Huxley',
    genre: 'Dystopian',
    published_year: 1932,
    price: 11.5,
    in_stock: false,
    pages: 311,
    publisher: 'Chatto & Windus'
  },
  {
    _id: ObjectId('685d44a785b36b735650eb67'),
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Fiction',
    published_year: 1960,
    price: 12.99,
    in_stock: true,
    pages: 336,
    publisher: 'J. B. Lippincott & Co.'
  },
  {
    _id: ObjectId('685d44a785b36b735650eb6d'),
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    genre: 'Romance',
    published_year: 1813,
    price: 14.99,
    in_stock: true,
    pages: 432,
    publisher: 'T. Egerton, Whitehall'
  },
  {
    _id: ObjectId('685d44a785b36b735650eb6e'),
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    genre: 'Fantasy',
    published_year: 1954,
    price: 19.99,
    in_stock: true,
    pages: 1178,
    publisher: 'Allen & Unwin'
  }
]
#descending order 
plp_bookstore> db.books.find().sort({price:-1})
[
  {
    _id: ObjectId('685d44a785b36b735650eb6e'),
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    genre: 'Fantasy',
    published_year: 1954,
    price: 19.99,
    in_stock: true,
    pages: 1178,
    publisher: 'Allen & Unwin'
  },
  {
    _id: ObjectId('685d44a785b36b735650eb6d'),
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    genre: 'Romance',
    published_year: 1813,
    price: 14.99,
    in_stock: true,
    pages: 432,
    publisher: 'T. Egerton, Whitehall'
  },
  {
    _id: ObjectId('685d44a785b36b735650eb67'),
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Fiction',
    published_year: 1960,
    price: 12.99,
    in_stock: true,
    pages: 336,
    publisher: 'J. B. Lippincott & Co.'
  },
  {
    _id: ObjectId('685d44a785b36b735650eb6a'),
    title: 'Brave New World',
    author: 'Aldous Huxley',
    genre: 'Dystopian',
    published_year: 1932,
    price: 11.5,
    in_stock: false,
    pages: 311,
    publisher: 'Chatto & Windus'
  },
  {
    _id: ObjectId('685d44a785b36b735650eb68'),
    title: '1984',
    author: 'George Orwell',
    genre: 'Dystopian',
    published_year: 1949,
    price: 10.99,
    in_stock: true,
    pages: 328,
    publisher: 'Secker & Warburg'
  },
  {
    _id: ObjectId('685d44a785b36b735650eb70'),
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    genre: 'Fiction',
    published_year: 1988,
    price: 10.99,
    in_stock: true,
    pages: 197,
    publisher: 'HarperOne'
  },
  {
    _id: ObjectId('685d44a785b36b735650eb69'),
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: 'Fiction',
    published_year: 1925,
    price: 9.99,
    in_stock: true,
    pages: 180,
    publisher: "Charles Scribner's Sons"
  },
  {
    _id: ObjectId('685d44a785b36b735650eb6c'),
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    genre: 'Fiction',
    published_year: 1951,
    price: 8.99,
    in_stock: true,
    pages: 224,
    publisher: 'Little, Brown and Company'
  },
  {
    _id: ObjectId('685d44a785b36b735650eb6f'),
    title: 'Animal Farm',
    author: 'George Orwell',
    genre: 'Political Satire',
    published_year: 1945,
    price: 8.5,
    in_stock: false,
    pages: 112,
    publisher: 'Secker & Warburg'
  }
]

#Use the limit and skip methods to implement pagination (5 books per page)
plp_bookstore> db.books.find().skip(0).limit(5)
[
  {
    _id: ObjectId('685d44a785b36b735650eb67'),
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Fiction',
    published_year: 1960,
    price: 12.99,
    in_stock: true,
    pages: 336,
    publisher: 'J. B. Lippincott & Co.'
  },
  {
    _id: ObjectId('685d44a785b36b735650eb68'),
    title: '1984',
    author: 'George Orwell',
    genre: 'Dystopian',
    published_year: 1949,
    price: 10.99,
    in_stock: true,
    pages: 328,
    publisher: 'Secker & Warburg'
  },
  {
    _id: ObjectId('685d44a785b36b735650eb69'),
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: 'Fiction',
    published_year: 1925,
    price: 9.99,
    in_stock: true,
    pages: 180,
    publisher: "Charles Scribner's Sons"
  },
  {
    _id: ObjectId('685d44a785b36b735650eb6a'),
    title: 'Brave New World',
    author: 'Aldous Huxley',
    genre: 'Dystopian',
    published_year: 1932,
    price: 11.5,
    in_stock: false,
    pages: 311,
    publisher: 'Chatto & Windus'
  },
  {
    _id: ObjectId('685d44a785b36b735650eb6c'),
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    genre: 'Fiction',
    published_year: 1951,
    price: 8.99,
    in_stock: true,
    pages: 224,
    publisher: 'Little, Brown and Company'
  }
]

#Aggregation Pipeline
#Create an aggregation pipeline to calculate the average price of books by genre
plp_bookstore> db.books.aggregate([{$group:{_id:"$genre",averagePrice: {$avg:"$price"}}},{$project:{_id:0,genre:"$_id",averagePrice:1}}])
[
  { averagePrice: 14.99, genre: 'Romance' },
  { averagePrice: 8.5, genre: 'Political Satire' },
  { averagePrice: 19.99, genre: 'Fantasy' },
  { averagePrice: 11.245000000000001, genre: 'Dystopian' },
  { averagePrice: 10.74, genre: 'Fiction' }
]

#Create an aggregation pipeline to find the author with the most books in the collection
plp_bookstore> db.books.aggregate([{$group:{_id:"$author", bookCount:{$sum:1}}},{$sort:{bookCount:-1}},{$limit:1},{$project:{_id:0,author:"$_id",bookCount:1}}])
[ { bookCount: 2, author: 'George Orwell' } ]

#Implement a pipeline that groups books by publication decade and counts them
plp_bookstore> db.books.aggregate([{$project:{ decade:{ $concat:[{$toString:{ $multiply:[{$floor:{$divide:["$published_year", 10]}},10]}},"s"]}}},{$group:{_id: "$decade", bookCount:{$sum:1}}},{$sort:{_id:1}}])
[
  { _id: '1810s', bookCount: 1 },
  { _id: '1920s', bookCount: 1 },
  { _id: '1930s', bookCount: 1 },
  { _id: '1940s', bookCount: 2 },
  { _id: '1950s', bookCount: 2 },
  { _id: '1960s', bookCount: 1 },
  { _id: '1980s', bookCount: 1 }
]

#Indexing
#Create an index on the title field for faster searches
plp_bookstore> db.books.createIndex({title:1})
title_1

#Create a compound index on author and published_year
plp_bookstore> db.books.createIndex({ author: 1, published_year: 1 })
author_1_published_year_1


