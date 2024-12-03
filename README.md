# Role-Based Access Control (RBAC) System

## Description

This project implements a Role-Based Access Control (RBAC) system where:
- Admin users have the ability to manage a list of users with details such as username, access level, status (active/inactive), and date/time of addition.
- Admin users can edit user details, change permissions, delete users, and toggle account status (active/inactive) from the user list.

For regular users:
- Users can log in to their respective dashboards. 
- Depending on their permissions, users can either upload or download PDFs:
  - **Data Export Access:** Users can upload PDFs.
  - **Data Import Access:** Users can download PDFs.
  - **Both Accesses:** Users can both upload and download PDFs.
  - **No Access:** Users cannot perform any of these actions.

Authentication is managed via **JWT** for secure login and access to respective dashboards.

## Features

- **Admin Dashboard:**
  - View and manage all users, including username, access level, status, and date/time of account creation.
  - Edit user details and change permissions.
  - Delete users.
  - Toggle user account status between active and inactive.

- **User Dashboard:**
  - Ability to log in and access the dashboard based on permissions.
  - Depending on access:
    - **Data Export Access:** Upload PDFs.
    - **Data Import Access:** Download PDFs.
    - **Both:** Upload and download PDFs.

## Technologies Used

- **Frontend:** React, Tailwind CSS
- **Backend:** Node.js
- **Authentication:** JWT (JSON Web Token)

## Deployment

- **Frontend:** [Live Deployment](https://frontendvrv.onrender.com)
  
## GitHub Repositories

- **Frontend Repository:** [GitHub Frontend](https://github.com/AbhimanAv01/frontendVRV)
- **Backend Repository:** [GitHub Backend](https://github.com/AbhimanAv01/backendVRV)


