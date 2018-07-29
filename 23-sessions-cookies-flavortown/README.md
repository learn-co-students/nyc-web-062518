# Sessions and Cookies in R A I L S

![](https://media.giphy.com/media/p8fgbnLzWWtEI/giphy.gif)

# What are Sessions?

### From the [Rails Docs](https://guides.rubyonrails.org/security.html#sessions):

- HTTP is a stateless protocol. Sessions make it stateful.


```
Most applications need to keep track of certain state of a particular user. This
could be the contents of a shopping basket or the user id of the currently
logged in user. Without the idea of sessions, the user would have to identify,
and probably authenticate, on every request. Rails will create a new session
automatically if a new user accesses the application. It will load an existing
session if the user has already used the application.

A session usually consists of a hash of values and a session ID, usually a
32-character string, to identify the hash. Every cookie sent to the client's
browser includes the session ID. And the other way round: the browser will send
it to the server on every request from the client. In Rails you can save and
retrieve values using the session method:
```

```ruby
# in application controller
session[:user_id] = @current_user.id
User.find(session[:user_id])
```
