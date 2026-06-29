# Dashboard Error Handling

**Yassine Moutaouakel**

## Description

This project is a Next.js dashboard built with the App Router. The `/dashboard` page displays four independent server-rendered data blocks with progressive loading, isolated loading states, and isolated error handling.

The comments block intentionally fails after its simulated delay. This shows that one failing section does not prevent the rest of the dashboard from loading correctly.

## Technologies

- Next.js
- React
- JavaScript
- App Router
- Server Components
- Suspense
- CSS

## API Used

The application uses JSONPlaceholder exclusively:

```txt
https://jsonplaceholder.typicode.com/
```

Endpoints used:

- `/users`
- `/posts`
- `/todos?userId=1`
- `/comments?postId=1`

## Structure

```txt
app/
  layout.jsx
  page.jsx
  globals.css
  dashboard/
    page.jsx
components/
  UsersBlock.jsx
  PostsBlock.jsx
  TodosBlock.jsx
  CommentsBlock.jsx
  BlockSkeleton.jsx
  ErrorBoundary.jsx
lib/
  api.js
public/
README.md
package.json
.gitignore
```

## Installation

```bash
npm install
```

## Run the Project

```bash
npm run dev
```

## URL

```txt
http://localhost:3000/dashboard
```

## Intentional Error

`CommentsBlock` calls `/comments?postId=1` with a simulated delay of 1500 ms and then throws an intentional error. The error is displayed only inside the comments card, while the users, posts, and todos cards continue to load and render normally.
