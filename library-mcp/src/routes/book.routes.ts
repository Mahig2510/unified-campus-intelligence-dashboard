import { Router } from "express";

import {
  createBook,
  getAllBooks,
  getBookById,
  searchBooks,
  issueBook,
  returnBook,
  getMyBorrowedBooks,
  getBorrowHistory,
  getAllOverdueBooks,
  getAnalytics,
} from "../controllers/book.controller";

const router = Router();

router.post("/", createBook);

router.post("/issue", issueBook);

router.post("/return", returnBook);

router.get("/", getAllBooks);

router.get("/search", searchBooks);

router.get(
  "/analytics",
  getAnalytics
);

router.get(
  "/user/:userId",
  getMyBorrowedBooks
);

router.get(
  "/history/:userId",
  getBorrowHistory
);

router.get(
  "/overdue",
  getAllOverdueBooks
);

router.get("/:id", getBookById);

export default router;