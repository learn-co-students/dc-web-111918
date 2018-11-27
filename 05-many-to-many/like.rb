class Like

    attr_reader :user, :tweet

    @@all = []

    def initialize(user, tweet)
        @user, @tweet = user, tweet
        if user != tweet.user
            @@all << self
        else
            puts "You wrote it, we know you like it"
        end
    end

    def self.all
        @@all 
    end

end