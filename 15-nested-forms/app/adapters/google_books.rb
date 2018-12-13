module GoogleBooks
  class Adapter

    attr_reader :author

    def initialize(author)
      @author = Author.find_or_create_by(name: author)
    end

    def fetch_books
      books = JSON.parse(RestClient.get(self.author.author_url))

      books['items'].each do |item|
        book = ::Book.new
        book.author = self.author
        book.title = item['volumeInfo']['title']
        book.snippet = item['volumeInfo']['description']

        book.save
      end
    end

  end
end
