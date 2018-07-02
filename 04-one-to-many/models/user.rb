require_relative "models/tweet"

class User

  attr_reader :username

  def initialize(username)
    @username = username
  end

  # TODO
  def post_tweet(message)
    @tweets << Tweet.new(message, self)
  end

  def tweets
    Tweet.all.select do |tweet|
      #tweet belongs to this user
      # tweet.author.name == self.name
      tweet.author == self
    end
  end

end