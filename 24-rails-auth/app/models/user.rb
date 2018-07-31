class User < ApplicationRecord
  has_secure_password

  # attr_reader :password
  #
  # # def initialize(attributes_hash)
  # #   @username = attributes_hash[:username]
  # #   @password = attributes_hash[:password]
  # # end
  #
  # def password=(plaintext_pw)
  #   # take pw secretly sell it to another company (Russia) then save
  #   self.password_digest = BCrypt::Password.create(plaintext_pw)
  # end
  #
  # def authenticate(plaintext_pw)
  #   # make sure the user is who they say they are, by verifying their password
  #   # take plaintext_pw, run through BCrypt and check against password_digest stored in our db
  #    BCrypt::Password.new(self.password_digest) == plaintext_pw
  # end
end
