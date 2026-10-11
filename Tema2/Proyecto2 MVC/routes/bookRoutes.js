const express = require('express');
const router = express.Router();

const {
  getBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook
} = require('../controllers/bookController');

const { verifyToken } = require('../middlewares/authMiddleware');
const { authorizeRoles } = require('../middlewares/roleMiddleware');

// GET - Obtener todos los libros
router.get('/', getBooks);

// GET - Obtener un libro por ID
router.get('/:id', getBookById);

// POST - Crear un libro (solo rol administrador)
router.post(
  '/',
  verifyToken,
  authorizeRoles(1),
  createBook
);

// PUT - Actualizar un libro (solo rol administrador)
router.put(
  '/:id',
  verifyToken,
  authorizeRoles(1),
  updateBook
);

// DELETE - Eliminar un libro (solo rol administrador)
router.delete(
  '/:id',
  verifyToken,
  authorizeRoles(1),
  deleteBook
);

module.exports = router;
