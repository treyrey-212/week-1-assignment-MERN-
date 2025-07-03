# week-1-assignment-MERN-
PLP Bookstore MongoDB Queries
This repository contains a collection of example MongoDB queries designed to manage and analyze a bookstore database named plp_bookstore. The queries showcase a range of common database operations such as finding, updating, deleting, sorting, pagination, aggregation, and indexing. These examples focus on the books collection, which stores detailed information about various books.

Each document in the books collection typically contains fields such as the book’s title, author, genre, year of publication, price, stock status, page count, and publisher. The structure allows for flexible querying and management of the bookstore’s inventory.

The basic queries included allow you to find books by genre, by publication year, or by a specific author. For example, you can retrieve all fiction books or find books published after a particular year. These queries help filter and narrow down the collection based on your criteria.

You will also find examples demonstrating how to update and delete documents. For instance, updating the price of a book or removing a book from the collection by its title. These operations are essential for maintaining an up-to-date inventory.

More advanced queries are included as well, such as filtering books that are currently in stock and were published after 2010. Projection is used to limit the output fields to only those necessary, such as title, author, and price. Sorting examples show how to order books by price in ascending or descending order, and pagination techniques demonstrate how to retrieve books in chunks, useful for large collections.

Aggregation pipelines are also covered. These powerful queries allow you to perform calculations such as finding the average price of books by genre, identifying the author with the most books in the collection, or grouping books by their publication decade and counting how many were published in each period. Aggregation provides a way to extract meaningful insights from the data.

To improve query performance, the README also explains how to create indexes on fields like title and a compound index on author and published_year. Proper indexing is critical to ensuring efficient data retrieval, especially in large datasets.

To use these queries, you simply need to have your MongoDB instance running with the plp_bookstore database loaded with book data. You can then run the provided commands directly in the Mongo shell or through any MongoDB client interface. Applying indexes after populating the collection can optimize the speed of your searches.

This repository aims to provide a solid foundation for anyone looking to work with bookstore data in MongoDB, demonstrating both basic and more complex database operations with practical examples. Feel free to extend or modify these queries to suit your own project needs.
