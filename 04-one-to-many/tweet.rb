class Tweet

    attr_reader :message, :user

    @@all_tweets = []

    def initialize(message, user)
        @message, @user = message, user
        self.class.all << self
    end

    def self.all
        @@all_tweets
    end

    def username
        self.user.username
    end
end 