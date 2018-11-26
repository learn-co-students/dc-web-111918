class User

    attr_reader :username

    def initialize(username)
        @username = username
    end

    def tweets
        # select all the tweets that have the username of current user
        Tweet.all.select do |tweet|
            tweet.user == self
        end
    end

    def post_tweet(message)
        tweet = Tweet.new(message, self)
        # Tweet.all << tweet
    end

end

