## Routes Overview

Let's take a blog website as an example. You'd want to have a controller action to create a new post (new route), to display one post (show route), to display all posts (index route), to delete a post (delete route), and a page to edit a post (edit route).

| HTTP VERB | ROUTE             | Action        | Used For                                                |
| --------- | ----------------- | ------------- | ------------------------------------------------------- |
| GET       | '/posts'          | index action  | index page to display all posts                         |
| GET       | '/posts/new'      | new action    | displays create post form                               |
| POST      | '/posts'          | create action | creates one blog post                                   |
| GET       | '/posts/:id'      | show action   | displays one blog post based on ID in the url           |
| GET       | '/posts/:id/edit' | edit action   | displays edit form based on ID in the url               |
| PATCH     | '/posts/:id'      | update action | _modifies_ an existing blog post based on ID in the url |
| PUT       | '/posts/:id'      | update action | _replaces_ an existing blog post based on ID in the url |
| DELETE    | '/posts/:id'      | delete action | deletes one blog post based on ID in the url            |
