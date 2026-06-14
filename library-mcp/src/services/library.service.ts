import IssuedBook from "../models/IssuedBook";

export const getBorrowedBooksByUser =
  async (userId: string) => {
    return await IssuedBook.find({
      userId,
      status: "Issued",
    }).populate("bookId");
  };

export const getBorrowHistoryByUser =
  async (userId: string) => {
    return await IssuedBook.find({
      userId,
    }).populate("bookId");
  };

export const getOverdueBooks =
  async () => {
    const today = new Date();

    return await IssuedBook.find({
      status: "Issued",
      dueDate: {
        $lt: today,
      },
    })
      .populate("bookId")
      .populate(
        "userId",
        "name email"
      );
  };

  import Book from "../models/Book";

export const getLibraryAnalytics =
  async () => {

    const totalBooks =
      await Book.countDocuments();

    const activeLoans =
      await IssuedBook.countDocuments({
        status: "Issued",
      });

    const totalIssuedRecords =
      await IssuedBook.countDocuments();

    const overdueBooks =
      await IssuedBook.countDocuments({
        status: "Issued",
        dueDate: {
          $lt: new Date(),
        },
      });

    const books =
      await Book.find();

    const availableBooks =
      books.reduce(
        (sum, book) =>
          sum + book.availableCopies,
        0
      );

    return {
      totalBooks,
      availableBooks,
      activeLoans,
      totalIssuedRecords,
      overdueBooks,
    };
  };