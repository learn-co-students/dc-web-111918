class Author

    attr_accessor :name, :id

    def initialize(name, id=nil)
        @name = name
        @id = id
    end

   def self.create(name)
        # create a new author
        # save it to the database

        author = Author.new(name)
        author.save
        author
   end 

   def save
        sql = <<-SQL 
            INSERT INTO authors (name) VALUES (?)
        SQL
        DB.execute(sql, self.name)
        sql = "SELECT last_insert_rowid()"
        id = DB.execute(sql)[0][0]
        self.id = id 
   end

   def self.find(id)
        # Author.find(2) => <Author @name="Maya Angelou">

        sql = "SELECT * FROM AUTHORS WHERE id = ?;"
        results = DB.execute(sql, id)
        self.make_object_from_db_row(results[0])

    end

    def self.make_object_from_db_row(row)
        Author.new(row[1], row[0])
    end

    def self.all
        sql = "SELECT * FROM AUTHORS"
        results = DB.execute(sql)
        results.map do |row|
            self.make_object_from_db_row(row)
        end
    end

    def delete
        sql = "DELETE FROM authors WHERE id = ?"
        DB.execute(sql, self.id)
    end
end