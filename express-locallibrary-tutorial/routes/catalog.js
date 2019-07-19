let express = require('express');
let router=express.Router();

//require controller modules

let book_controller=require('../controller/bookController');
let author_controller=require('../controller/authorController');
let genre_controller=require('../controller/genreController');
let book_instance_controller=require('../controller/bookinstanceController');

//book routes
//GET homepage
router.get('/',book_controller.book_create_get);
//GET request for creating a book
router.get('/book/create',book_controller.book_create_post);
//GET request for creating BOOK
router.get('/book/:id/delete',book_controller.book_delete_get);
//POST request to delete Book.
router.post('/book/:id/delete',book_controller.book.book_delete_get);
//GET request to delete book