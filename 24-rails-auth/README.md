---
Title: Intro to Rails
Creator: Lecture by Johann Kerr <@johannkerr>, notes by Rishikesh Tirumala <@rishter>
Type: Lecture
---


# Auth in Rails

## Objectives
- Understand, theoretically, how authentication and authorization work
- Discuss different encryption and hashing schemes, and `bcrypt` specifically
- Augment a user model in rails using `bcrypt` and `password_digest`
- Expose this information in a sample rails app
- Go over sessions, cookies, and implement sign up, log in, and log out


## Preparation
Generally, this is the last Rails lecture. Students may have already taken the coding challenge before learning about Auth.

Have some kind of application set up that could use some user interaction.

## Steps

### How does auth work in theory? (25 minutes)
Answer the following questions together:
##### What is the difference between sign-in and sign up?

Sign-up happens once, and afterwards the information that is used to authenticate a user exists in the system for sign-in.

##### What is authentication?

It boils down to a really interesting question: _Are you who you say you are?_ And we use the username/password as a proxy for that.

##### What is the difference between Authentication and Authorization?

Authorization happens after authentication. It's about scope, and specific information. _What is the user allowed to see/interact with?_

##### How do passwords work?

Do websites save our passwords? And if they do, how are they stored? Talk about encryption, and why hashed passwords are encrypted. We don't want malicious employees or hackers to see our passwords.

##### What is the difference between hashing and encrypting?

What is encryption? What can be encrypted? Anything that can be encrypted, must also be able to be decrypted. You can use this time to talk about ciphers, and show how at it's core, encryption and hashing is about these principles. In order to decrypt a cypher, you need to know the cypher used and any parameters (offset, perhaps) used to encrypt the information.

Hashing is a little different: the ultimate goal of one-way hashing is that you cannot "decrypt" the original text. In addition to any encryption scheme, each authenticated user has a "salt", added information that augments the password to make decryption even harder.  

Give an example of various text going through some kind of hashing scheme with salts, so that the students can see this in action. Be sure your example shows that the server is actually validating the equality of the _hashed password_ with the hashed input.

### Using `bcrypt` to create passwords in Rails (10 minutes)
What's cool about `bcrypt`? By design, it's slow. This means that anyone who wants to crack it has to take a long time to brute-force passwords. It also allows you to define a column called `password_digest` and it will do the rest of the work.

_Remember, convention over configuration._ And especially in this case, we generally don't have the time or energy to build our own encryption that surpasses what already exists.

After installing the `bcrypt` gem, you can use a macro in your user model called `has_secure_password`, which does a lot of the integration for you. Go in and test this in the console. You can show how the `user` model ends up with a `password_digest` attribute even though you send in `password` through the `create`. Do it again, this time with a `password_confirmation` in the initialization hash. You can show how rails rejects the transaction.

Now that you've created a user with a password, you can do `user.authenticate("password")`.

### Exposing user authentication in the UI (20 minutes)
_These steps don't have to happen all in one order. Play with whatever flow works best for you._

You can set up routes to work with users in the app.
```ruby
resources :users, only: [:new, :create, :show]
```

Now you can build a `form_for` for the `new` action:

```erb
<%= form_for @user do |f| %>
  <%= f.label :username %>
  <%= f.text_field :username %>
  <%= f.label :password %>
  <%= f.text_field :password %>
  <%= f.label :password_confirmation %>
  <%= f.text_field :password_confirmation %>
  <%= f.submit %>
<% end %>
```

Go through making the `create` controller:

```ruby
@user = User.new(user_params)
if @user.valid?
  @user.save
  redirect_to @user
else
  redirect_to new_user_path
end
```

Our form doesn't hide the password in the `input`, so change the text field to `f.password_field`.

So, to recap the necessary steps:
1. `password_digest` as an attribute in our `users` table
2. `bcrypt` installed in `Gemfile`
3. `has_secure_password` in the `User` model

_If it comes up, talk about `devise` and why it's more valuable to learn auth by doing it with vanilla `bcrypt`._

### Sessions and cookies (25 minutes)
How does an application keep you logged in between requests? Remember, requests are stateless, so sessions allow us to provide a user a sense of continuity as the interact with the website.  

How do cookies fit into this? Talk briefly about how they're made, how the application creates, accesses and maintains them. Show what cookies are, in chrome. Ultimately, they're just key-value pairs. Make it clear that each website has it's own cookies, and that cookies aren't secure, because they're not necessarily encrypted.

What information do we want to store in the cookie?

Sessions aren't really stored in the database, so we don't use a model for them. However, they still need routes, a controller and views.

`routes.rb `
```ruby
get "signup", to: "users#new", as: "signup"
get "login", to: "sessions#new", as: "login"
post "sessions", to: "sessions#create", as: "sessions"
```

`sessions_controller.rb`
```ruby
def new
  # don't need anything in here, cause we're not setting up a
  # blank model to couple with the form
end

def create
  # no strong params cause there is no mass assignment
  user = User.find_by(username: params[:username])
  if @user && @user.authenticate(params[:password])
    redirect_to @user
  else
    redirect_to login_path
  end
end
```
Use this time to talk about how in certain cases, it's more secure to offer _less_ feedback to the user. This is why we both authenticate on the existence of the username, and the password match. Still, it's helpful to use `flash[:error]` here.

`sessions/new.html.erb`

Use a `form_tag` instead of a `form_for` here, we don't have a model to couple the form with.

_All forms need an action and a method, and here the action is `/sessions`, but that may not be intuitive to the students, so call it out explicitly._
```erb
<%= form_tag sessions_path do %>
  <%= label_tag "Username" %>
  <%= text_field_tag :username %>
  <%= label_tag "Password" %>
  <%= password_field_tag :password %>
  <%= submit_tag "Sign In" %>
<% end %>
```

#### Authorization and User-specific content (25 minutes)

Have some model such that the user `has_many`. Given this association, we can show the user their specific objects (in this example, `song`) on their own page.

Augment `sessions_controller#create` with the following line after a successful authentication:
```ruby
session[:user_id] = @user.id
```
This allows us to save the user_id in the session cookie. `session` persists across the entire usage of the application, and `flash` works just between 2 requests. Show that this new code adds the cookie in browser as well.

Here are the steps that we can use to get our user's songs through the session:
1. Get the sessions by user_id
2. Get the user by user_id
3. get the songs by user

In `SongsController#index`:
```ruby
if session[:user_id]
  @user = User.find(session[:user_id])
  @songs = @user.songs
else
  @songs = Song.all # or force a login
end
```
Show how this works and filter's the song by user (when logged in). However, you don't want to do this work over and over again. Where can you do this? `ApplicationController`!

`application_controller.rb`

```ruby
def current_user
  if session[:user_id]
    @user = User.find_by(id: session[:user_id])
  else
  end
end

def logged_in?
  !!current_user
end
```

Now, you can refactor `SongsController#index`
```ruby
if logged_in?
  @songs = current_user.songs
else
  @songs = Song.all # or force a login
end
```
This is still not perfect. We want to be able to redirect to the login page if the user isn't logged in yet.

Add the following to `ApplicationController`:
```ruby
def authorized
  redirect_to login_path unless logged_in?
end
```

Now, in each controller/action that needs to do this redirect, you can add:
```ruby
before_action :authorized
```
Make sure not to use this for the login path. Instead, you should use:
```ruby
skip_before_action :authorized, only: [:new, :create] # or whatever onlys you need
```

#### Logging out (10 minutes)

So how do you log out? By destroying the session.

`routes.rb`
```ruby
delete "sessions", to: "sessions#destroy"
```

`sessions_controller.rb`
```ruby
def destroy
  session.delete(:user_id) # or session[:user_id] = nil
end
```
To expose this, talk about a button that shows a "Log Out" button if logged in, and a "Log In" button otherwise.

The best place to do this is in `application.html.erb`, but to expose our controller's method here, we must use the `helper_method :logged_in?` macro in our `ApplicationController`

Finally, in `application.html.erb`:

```erb
<% if logged_in? %>
  <%= link_to "Logout", sessions_path, method: :delete %>
<% else %>
  <%= link_to "Login", login_path %>
<% end %>
```

#### Conclusion (5 minutes)
This is just the tip of the iceberg. Encourage students to do their own research on cookies, sessions, encryption, hashing, and all the stuff we've gone over. There are so many levels to security.

## Resources
None because Johann is a legend.
