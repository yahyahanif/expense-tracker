const express = require('express');
const router = express.Router();

router
  .route('/')
  .get(getTransactions)
  .post(addTransaction);

