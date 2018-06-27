require 'rest-client'
require 'json'
# require 'pry'

def welcome_user
  puts "Welcome to Google Books Searcher!"
  puts "Please enter a search term:"
end

def get_search_from_user
  gets.chomp
end


def get_from_book_hash(book_hash, key)
  book_hash["volumeInfo"][key]
end

def join_if_not_nil(array)
  array.join(", ") unless array.nil?
end

def get_books_results(search_term)
  url = "https://www.googleapis.com/books/v1/volumes?q=" + search_term.gsub(/\s/, "+")

  response = RestClient.get(url)
  stringy_json = response.body
  JSON.parse(stringy_json)
end


def process_big_nasty_books_hash(big_nasty_books_hash)
  big_nasty_books_hash["items"].map do |book_hash|
    # p book_hash["volumeInfo"]["authors"]
    {
      title: get_from_book_hash(book_hash, "title"),
      description: get_from_book_hash(book_hash, "description"),
      authors: join_if_not_nil(get_from_book_hash(book_hash, "authors"))
    }
  end
end

def display_book_info(book_info)
  book_info.each do |book_info|
    puts book_info[:title]
    puts book_info[:description]
    puts book_info[:authors]
    puts "  "
  end
end


def run
  welcome_user
  input = get_search_from_user
  all_books_json_hash = get_books_results(input)
  books_array_of_hashes = process_big_nasty_books_hash(all_books_json_hash)
  display_book_info(books_array_of_hashes)
end


run

