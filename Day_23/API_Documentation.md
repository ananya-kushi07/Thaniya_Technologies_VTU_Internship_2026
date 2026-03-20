# Task API Documentation

## Base URL
http://localhost:5000

---

## 1. Get All Tasks

**Endpoint:** /tasks  
**Method:** GET  

### Response

Status: 200 OK

[
  {
    "id": 1,
    "title": "Learn Node.js"
  }
]

---

## 2. Add New Task

**Endpoint:** /tasks  
**Method:** POST  

### Request Body

{
  "title": "Learn Express"
}

### Response

Status: 201 Created

{
  "id": 1,
  "title": "Learn Express"
}

---

## Error Response

Status: 400 Bad Request

{
  "message": "Title is required"
}