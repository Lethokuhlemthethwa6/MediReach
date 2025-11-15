# API Testing Collection - MediReach

Use these examples with Postman, Insomnia, or Thunder Client

## Setup
1. Set base URL: `http://localhost:5000/api`
2. After login, copy the token and use it in Authorization header

---

## 1. Authentication

### Register New User
```
POST {{baseURL}}/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "phone": "+254700123456",
  "dateOfBirth": "1990-01-15",
  "address": "Nairobi, Kenya"
}
```

### Login
```
POST {{baseURL}}/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```
**Response**: Copy the `token` value

### Get My Profile
```
GET {{baseURL}}/auth/me
Authorization: Bearer YOUR_TOKEN_HERE
```

### Update Profile
```
PUT {{baseURL}}/auth/updatedetails
Authorization: Bearer YOUR_TOKEN_HERE
Content-Type: application/json

{
  "name": "John Updated",
  "phone": "+254700999888"
}
```

### Update Password
```
PUT {{baseURL}}/auth/updatepassword
Authorization: Bearer YOUR_TOKEN_HERE
Content-Type: application/json

{
  "currentPassword": "password123",
  "newPassword": "newpassword123"
}
```

---

## 2. Appointments

### Create Appointment
```
POST {{baseURL}}/appointments
Authorization: Bearer YOUR_TOKEN_HERE
Content-Type: application/json

{
  "doctor": "Dr. Jane Smith",
  "department": "Cardiology",
  "date": "2024-12-15",
  "time": "10:00",
  "reason": "Regular heart checkup",
  "notes": "Bring previous test results"
}
```

### Get All My Appointments (Patient)
```
GET {{baseURL}}/appointments
Authorization: Bearer YOUR_TOKEN_HERE
```

### Get Appointments by Status
```
GET {{baseURL}}/appointments?status=scheduled
Authorization: Bearer YOUR_TOKEN_HERE
```

### Get Appointments by Date
```
GET {{baseURL}}/appointments?date=2024-12-15
Authorization: Bearer YOUR_TOKEN_HERE
```

### Get Single Appointment
```
GET {{baseURL}}/appointments/APPOINTMENT_ID
Authorization: Bearer YOUR_TOKEN_HERE
```

### Update Appointment
```
PUT {{baseURL}}/appointments/APPOINTMENT_ID
Authorization: Bearer YOUR_TOKEN_HERE
Content-Type: application/json

{
  "date": "2024-12-16",
  "time": "14:00",
  "status": "confirmed"
}
```

### Cancel Appointment (Update Status)
```
PUT {{baseURL}}/appointments/APPOINTMENT_ID
Authorization: Bearer YOUR_TOKEN_HERE
Content-Type: application/json

{
  "status": "cancelled"
}
```

### Delete Appointment
```
DELETE {{baseURL}}/appointments/APPOINTMENT_ID
Authorization: Bearer YOUR_TOKEN_HERE
```

### Get Appointment Statistics (Staff/Admin)
```
GET {{baseURL}}/appointments/stats/dashboard
Authorization: Bearer YOUR_TOKEN_HERE
```

---

## 3. Users (Staff/Admin Only)

### Get All Users
```
GET {{baseURL}}/users
Authorization: Bearer YOUR_TOKEN_HERE
```

### Get Users by Role
```
GET {{baseURL}}/users?role=patient
Authorization: Bearer YOUR_TOKEN_HERE
```

### Get User by ID
```
GET {{baseURL}}/users/USER_ID
Authorization: Bearer YOUR_TOKEN_HERE
```

### Update User (Admin Only)
```
PUT {{baseURL}}/users/USER_ID
Authorization: Bearer YOUR_TOKEN_HERE
Content-Type: application/json

{
  "role": "staff",
  "isActive": true
}
```

### Delete User (Admin Only)
```
DELETE {{baseURL}}/users/USER_ID
Authorization: Bearer YOUR_TOKEN_HERE
```

### Get User Statistics (Admin)
```
GET {{baseURL}}/users/stats/dashboard
Authorization: Bearer YOUR_TOKEN_HERE
```

---

## 4. Health Check

### API Health Check
```
GET {{baseURL}}/health
```

### Root Endpoint
```
GET http://localhost:5000/
```

---

## Testing Workflow

### 1. Patient Flow
1. Register new user → Get token
2. Create appointment → Get appointment ID
3. View appointments
4. Update appointment
5. Cancel appointment

### 2. Staff Flow
1. Login as staff (change role in DB first)
2. View all appointments
3. Update appointment status to "confirmed"
4. View appointment statistics

### 3. Admin Flow
1. Login as admin (change role in DB first)
2. View all users
3. View user statistics
4. View appointment statistics
5. Update user roles

---

## Status Codes

- `200` - Success
- `201` - Created
- `400` - Bad Request (validation error)
- `401` - Unauthorized (invalid/missing token)
- `403` - Forbidden (insufficient permissions)
- `404` - Not Found
- `500` - Server Error

---

## Tips

1. **Always include Authorization header** for protected routes
2. **Use proper date format**: YYYY-MM-DD
3. **Valid departments**: General Practice, Pediatrics, Cardiology, etc.
4. **Valid statuses**: scheduled, confirmed, cancelled, completed, no-show
5. **Valid roles**: patient, staff, admin

---

## Postman Collection

You can import this into Postman:
1. Create new collection "MediReach API"
2. Set collection variable: `baseURL` = `http://localhost:5000/api`
3. Set authorization type: Bearer Token
4. Add {{token}} as the token value
5. Copy these requests into the collection
