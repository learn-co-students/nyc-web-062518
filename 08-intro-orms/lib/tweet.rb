class Tweet
  attr_accessor :message, :username, :id

  def initialize(args={})
    @id = args['id']
    @message = args['message']
    @username = args['username']
  end

  # read
  def self.find(id)
    # "select * from tweets where id = 5; drop table tweets" 
    # this ^ would be bad so we let the sqlite gem sanitize the id
    array_of_tweet_hashes = DB[:conn].execute("select * from tweets where id = ?", id)
    #assume there's just the one
    #return a single tweet instance
    Tweet.new(array_of_tweet_hashes.first)
  end

  def self.all
    array_of_tweet_hashes = DB[:conn].execute("select * from tweets")
    # return an array of tweet instances
    array_of_tweet_hashes.map do |tweet_hash|
      Tweet.new(tweet_hash)
    end
  end

  def save
    sql = "insert into tweets (username, message) values (?, ?)"
    DB[:conn].execute(sql, self.username, self.message)

    #ugh
    array_of_hash_with_id = DB[:conn].execute("SELECT last_insert_rowid() as id")

    self.id = array_of_hash_with_id.first["id"]

    true #it worked
  end

  def update(hash)

    self.username = hash["username"] || self.username
    self.message = hash["message"] || self.message

    sql = <<-SQL_QUERY 
      UPDATE tweets 
      SET username = ?, message = ? 
      WHERE id = ?
    SQL_QUERY

    binding.pry

    DB[:conn].execute(sql, self.username, self.message, self.id)
    # success?
    true
  end

  def delete
    DB[:conn].execute("DELETE from tweets where id = ?", self.id)
    # success?
    true
  end

end
