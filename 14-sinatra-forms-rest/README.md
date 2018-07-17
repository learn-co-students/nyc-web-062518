## Routes Overview

Let's take a pizza website as an example. You'd want to have a controller action to create a new pizza (new route), to display one pizza (show route), to display all pizzas (index route), to delete a pizza (delete route), and a page to edit a pizza (edit route).

| HTTP VERB | ROUTE              | Action        | Used For                                            |
| --------- | ------------------ | ------------- | --------------------------------------------------- |
| GET       | '/pizzas'          | index action  | index page to display all pizzas                    |
| GET       | '/pizzas/new'      | new action    | displays create pizza form                          |
| POST      | '/pizzas'          | create action | creates one blog pizza                              |
| GET       | '/pizzas/:id'      | show action   | displays one blog pizza based on ID in the url      |
| GET       | '/pizzas/:id/edit' | edit action   | displays edit form based on ID in the url           |
| PATCH     | '/pizzas/:id'      | update action | _modifies_ an existing pizza based on ID in the url |
| PUT       | '/pizzas/:id'      | update action | _replaces_ an existing pizza based on ID in the url |
| DELETE    | '/pizzas/:id'      | delete action | deletes one pizza based on ID in the url            |
