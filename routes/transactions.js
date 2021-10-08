const express = require('express');
const router = express.Router();
payment
router
  .route('/')
  .get(getTransactions)
  .post(addTransaction);

