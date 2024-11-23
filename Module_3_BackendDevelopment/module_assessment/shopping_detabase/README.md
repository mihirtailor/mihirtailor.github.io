# Shopping Database Management System

## Overview

MySQL database system for tracking products, categories and orders. Features multiple queries for business analytics and inventory management.

## Database Structure

### Tables

1. Categories

   - category_id (PK)
   - category_name

2. Products

   - product_id (PK)
   - product_name
   - price
   - category_id (FK)

3. Orders
   - order_id (PK)
   - product_id (FK)
   - order_date
   - quantity

## Key Features

- Order tracking by date
- Product filtering by category
- Premium product identification
- Category-wise product counts
- Best-selling products analysis
