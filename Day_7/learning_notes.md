# Backend Development – Day 7 Notes

## Why Password Hashing?

Storing passwords in plain text is insecure. Password hashing ensures:

- Passwords are not directly readable
- Increased security against data breaches
- Safe authentication systems

## What is bcrypt?

bcrypt is a library used to:

- Hash passwords
- Compare hashed passwords during login
- Add salt automatically for extra security

## Role-Based Authorization

Role-based authorization allows:

- Different access levels for different users
- Secure admin-only routes
- Better control over backend APIs

## Authorization Flow

1. User registers with hashed password  
2. User logs in and receives JWT  
3. JWT contains user role  
4. Middleware checks role before allowing access  

## Roles Used

- Admin – Full access  
- User – Limited access  

## Key Learnings

- Difference between authentication and authorization  
- Secure password handling  
- Protecting routes using roles