require 'rest-client'
require 'json'
require 'pry'

GOOGLE_BOOKS_API_BASE_URL = "https://www.googleapis.com/books/v1/volumes?q="


def get_search_terms
# get search terms
    puts "Hello User.  What would you like to search for?\n\n"
    search_terms = gets.chomp
end

def build_url(search_terms)
    #construct the URL
    GOOGLE_BOOKS_API_BASE_URL + search_terms
end


def get_response(url)
    # get the information from the URL
    RestClient.get(url)
end

def parse_response(response)
    # parse it into JSON
    JSON.parse(response)
end

def parse_authors(authors)
    if authors.nil?
        return "Anonymous"
    else
        authors.join(" & ")
    end
end

def display_results(json)
    # display the top 10 results (author and title) to the user
    # json["items"][0]["volumeInfo"]["authors"]
    json["items"][0..9].each do |book|
        title = book["volumeInfo"]["title"]
        authors = book["volumeInfo"]["authors"]
        authors = parse_authors(authors)
        puts "#{title} by #{authors}"
    end
end

def valid?(search_terms)
    # binding.pry
   !search_terms.match(/\A[a-zA-Z0-9]*\z/).nil? && search_terms != ""
end

def main
    search_terms = get_search_terms
    while !valid?(search_terms)
        puts "You may only search for alphanumeric characters"
        search_terms = get_search_terms
    end
    url = build_url(search_terms)
    response = get_response(url)
    json = parse_response(response)
    display_results(json)
end

main