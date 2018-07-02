class Tweet

  attr_reader :message, :author

  ALL_TWEETS = []

  def initialize(message, author)
    @message = message
    @author = author
    ALL_TWEETS << self
  end 

  def self.all
    ALL_TWEETS
  end

  def username
    author.username
  end

end
