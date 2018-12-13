class Author < ActiveRecord::Base
    has_many :books



    def author_url(max_results = 20)
        base_google_books_url = 'https://www.googleapis.com/books/v1/volumes?q='
        "#{base_google_books_url}#{self.slugged_name}&maxResults=#{max_results}"
    end

    def slugged_name
      self.name.gsub(/\W+/, '').downcase
    end

end


