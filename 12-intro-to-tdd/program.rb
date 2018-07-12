require 'pry'

def is_palindrome?(word)
  raise ArgumentError if !word.is_a?(String)
  return false if word.empty?

  downcased_word = word.downcase.gsub(/\W/, "")
  downcased_word == downcased_word.reverse
end
