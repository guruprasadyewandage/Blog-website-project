Blog Website

A full-stack blog website built with React, Appwrite, Redux Toolkit, React Router, React Hook Form, Tailwind CSS, and TinyMCE.

The application allows users to create an account, log in securely, create and publish blog posts, upload featured images, edit their own posts, delete their own posts, and browse published articles.

Features

User registration and login

Appwrite-based authentication

Protected routes for authenticated users

Create blog posts

Edit existing posts

Delete posts created by the logged-in user

Upload and preview featured images

Rich text editor using TinyMCE

Automatic slug generation from post titles

Publish or deactivate posts using post status

Browse all active blog posts

Individual post detail pages

Author-only Edit and Delete actions

Redux Toolkit for authentication state

Responsive and modern UI

Active navigation state to show the current page

Tech Stack

Frontend

React 19

Vite

React Router DOM

Tailwind CSS

React Hook Form

Redux Toolkit

React Redux

TinyMCE

HTML React Parser

Backend / Services

Appwrite Authentication

Appwrite Databases

Appwrite Storage

Project Structure

## Project Structure

```text
Blog-Website/
├── public/
│
├── src/
│   ├── appwrite/
│   │   ├── auth.js
│   │   └── config.js
│   │
│   ├── assets/
│   │
│   ├── components/
│   │   ├── container/
│   │   ├── post-form/
│   │   ├── Footer/
│   │   ├── Header/
│   │   ├── AuthLayout.jsx
│   │   ├── Button.jsx
│   │   ├── Input.jsx
│   │   ├── Login.jsx
│   │   ├── Logo.jsx
│   │   ├── PostCard.jsx
│   │   ├── RTE.jsx
│   │   ├── Select.jsx
│   │   └── Signup.jsx
│   │
│   ├── conf/
│   │   └── conf.js
│   │
│   ├── pages/
│   │   ├── AddPost.jsx
│   │   ├── AllPosts.jsx
│   │   ├── EditPost.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Post.jsx
│   │   └── Signup.jsx
│   │
│   ├── store/
│   │   ├── authSlice.js
│   │   ├── postSlice.js
│   │   └── store.js
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .env
├── .gitignore
├── package.json
└── README.md
```
Application Flow

1. Authentication

Users can create an account using their name, email, and password.

After registration, the application creates an Appwrite account and automatically creates a login session.

When a user logs in:

Login Form
↓
React Hook Form
↓
Appwrite Authentication
↓
Get Current User
↓
Redux authSlice
↓
User is authenticated

The authentication state is stored in Redux and is checked when the application starts.

2. Protected Routes

Authenticated users can access:

All Posts

Create Post

Edit Post

Unauthenticated users are redirected to the Login page when trying to access protected pages.

3. Creating a Post

The user enters:

Title

Slug

Content

Featured Image

Status

The slug is automatically generated from the title.

The featured image is uploaded to Appwrite Storage, while the post information is stored in an Appwrite Database collection.

Create Post
↓
Upload Featured Image
↓
Get Image ID
↓
Create Appwrite Document
↓
Store Post + Image ID + User ID
↓
Open Post Page

4. Editing a Post

The post author can edit their post.

When a new featured image is uploaded, the old image is removed from Appwrite Storage and the new image is associated with the post.

5. Deleting a Post

Only the post author is shown the Edit and Delete controls.

When a post is deleted:

Delete Post
↓
Delete Appwrite Database Document
↓
Delete Featured Image
↓
Return to Home

Appwrite Setup

Create an Appwrite project and configure:

Authentication

Enable email/password authentication.

Database

Create a database and a collection for posts.

The post collection should contain fields similar to:

Field

Purpose

title

Blog post title

content

Rich text content

featuredImage

Appwrite Storage file ID

status

active / inactive

userId

ID of the post author

The document ID is used as the post slug.

Storage

Create a storage bucket for featured images.

Make sure the required read/write permissions are configured in Appwrite.

Environment Variables

Create a .env file in the project root.

VITE_APPWRITE_URL=your_appwrite_endpoint
VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_DATABASE_ID=your_database_id
VITE_APPWRITE_COLLECTION_ID=your_collection_id
VITE_APPWRITE_BUCKET_ID=your_bucket_id
VITE_TINYMCE_API_KEY=your_tinymce_api_key

Do not commit your .env file to GitHub.

The project already includes .env in .gitignore.

Installation

Clone the repository:

git clone <your-github-repository-url>

Move into the project directory:

cd Blog-Website

Install dependencies:

npm install

Create and configure your .env file.

Start the development server:

npm run dev

The application will be available at the local URL shown by Vite.

Build for Production

Create a production build:

npm run build

Preview the production build:

npm run preview

Main Routes

Route

Access

Purpose

/

Public

Home page

/login

Public

User login

/signup

Public

User registration

/all-posts

Authenticated

Browse all posts

/add-post

Authenticated

Create a new post

/post/:slug

Public

View a single post

/edit-post/:slug

Authenticated

Edit a post

State Management

Redux Toolkit is used to manage authentication state.

The authentication store keeps:

{
status: false,
userData: null
}

When a user logs in:

status → true
userData → current Appwrite user

When the user logs out:

status → false
userData → null

Key Concepts Used

This project demonstrates practical use of:

React components

React Hooks

React Router

Protected routes

Redux Toolkit

Form handling with React Hook Form

Appwrite authentication

Appwrite database CRUD operations

Appwrite file storage

Rich text editing

File upload handling

Dynamic routes

Conditional rendering

Responsive UI with Tailwind CSS

Future Improvements

Possible future improvements include:

User profile pages

Search and filtering

Categories and tags

Comments

Likes and bookmarks

Pagination

Post analytics

Forgot password functionality

Email verification

Admin dashboard

Dark mode

Social sharing

Better role-based authorization

Author
Guruprasad Yewandage
Built as a full-stack web development project to practice React, Appwrite, authentication, CRUD operations, state management, and responsive UI development.
