import { Request, Response } from "express";
import Book from "../models/Book";
import IssuedBook from "../models/IssuedBook";
import {
  getBorrowedBooksByUser,
  getBorrowHistoryByUser,
  getOverdueBooks,
  getLibraryAnalytics,
} from "../services/library.service";

export const createBook = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const book = await Book.create(req.body);

    res.status(201).json({
      success: true,
      book,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create book",
    });
  }
};

export const getAllBooks = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const books = await Book.find();

    res.status(200).json({
      success: true,
      count: books.length,
      books,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch books",
    });
  }
};

export const getBookById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      res.status(404).json({
        success: false,
        message: "Book not found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      book,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch book",
    });
  }
};

export const searchBooks = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const keyword = req.query.keyword as string;

    const books = await Book.find({
      title: {
        $regex: keyword,
        $options: "i",
      },
    });

    res.status(200).json({
      success: true,
      count: books.length,
      books,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Search failed",
    });
  }
};

export const issueBook = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { bookId, userId, dueDate } = req.body;

    const book = await Book.findById(bookId);

    if (!book) {
      res.status(404).json({
        success: false,
        message: "Book not found",
      });
      return;
    }

    if (book.availableCopies <= 0) {
      res.status(400).json({
        success: false,
        message: "Book unavailable",
      });
      return;
    }

    const issuedBook = await IssuedBook.create({
      bookId,
      userId,
      dueDate,
    });

    book.availableCopies -= 1;

    await book.save();

    res.status(201).json({
      success: true,
      issuedBook,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to issue book",
    });
  }
};

export const returnBook = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { issueId } = req.body;

    const issuedBook =
      await IssuedBook.findById(issueId);

    if (!issuedBook) {
      res.status(404).json({
        success: false,
        message: "Issued record not found",
      });
      return;
    }

    if (issuedBook.status === "Returned") {
      res.status(400).json({
        success: false,
        message: "Book already returned",
      });
      return;
    }

    const book = await Book.findById(
      issuedBook.bookId
    );

    if (!book) {
      res.status(404).json({
        success: false,
        message: "Book not found",
      });
      return;
    }

    issuedBook.status = "Returned";
    issuedBook.returnDate = new Date();

    await issuedBook.save();

    book.availableCopies += 1;

    await book.save();

    res.status(200).json({
      success: true,
      message: "Book returned successfully",
      issuedBook,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to return book",
    });
  }
};

export const getMyBorrowedBooks = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const books = await getBorrowedBooksByUser(
    req.params.userId as string
    );

    res.status(200).json({
      success: true,
      count: books.length,
      books,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch borrowed books",
    });
  }
};

export const getBorrowHistory = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const history =
    await getBorrowHistoryByUser(
    req.params.userId as string
    );

    res.status(200).json({
      success: true,
      count: history.length,
      history,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch history",
    });
  }
};

export const getAllOverdueBooks = async (
  _req: Request,
  res: Response
): Promise<void> => {
  try {
    const books =
      await getOverdueBooks();

    res.status(200).json({
      success: true,
      count: books.length,
      books,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message:
        "Failed to fetch overdue books",
    });
  }
};

export const getAnalytics = async (
  _req: Request,
  res: Response
): Promise<void> => {
  try {

    const analytics =
      await getLibraryAnalytics();

    res.status(200).json({
      success: true,
      analytics,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message:
        "Failed to fetch analytics",
    });

  }
};