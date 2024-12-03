# Role-Based Access Control (RBAC) System

## Description

This project implements a Role-Based Access Control (RBAC) system where:
- Admin users can view a list of all users, including their details such as username, access level, status (active/inactive), and the date/time of addition.
- Admin users can also edit user details, change permissions, delete users, and toggle the account status (active/inactive) using a button in the user list.

For regular users:
- Users can log in to their dashboards.
- Depending on their permissions:
  - **Data Export Access**: Users can upload PDFs.
  - **Data Import Access**: Users can download PDFs.
  - **Both Accesses**: Users can both upload and download PDFs.
  - **No Access**: Users cannot perform any of these actions.

Authentication is managed using **JWT (JSON Web Token)** for secure login and access to respective dashboards.

## Features

- **Admin Dashboard:**
  - View and manage users: username, access level, status, and date/time of account creation.
  - Edit user details and permissions.
  - Delete users.
  - Toggle user account status (active/inactive).
  
- **User Dashboard:**
  - Users can log in and access their dashboards based on their permissions.
  - Depending on the permissions:
    - **Data Export Access**: Upload PDFs.
    - **Data Import Access**: Download PDFs.
    - **Both**: Upload and download PDFs.
    - **No Access**: Cannot perform any action.

## Technologies Used

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js
- **Authentication**: JWT (JSON Web Token)

## Deployment

- **Frontend**: [Live Deployment](https://frontendvrv.onrender.com)
  
## GitHub Repositories

- **Frontend Repository**: [GitHub Frontend](https://github.com/AbhimanAv01/frontendVRV)
- **Backend Repository**: [GitHub Backend](https://github.com/AbhimanAv01/backendVRV)

## Initial Credentials

### Admin:

- **ID**: admin@gmail.com
- **Password**: admin

### Users:

1. **User 1** (Data Import Access):
   - **ID**: user1@gmail.com
   - **Password**: user1

2. **User 2** (Data Import Access):
   - **ID**: user2@gmail.com
   - **Password**: user2

*You can create additional users as required, assigning them the appropriate access levels (Data Export, Data Import, or both).*

