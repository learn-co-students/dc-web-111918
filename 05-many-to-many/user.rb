class User

    attr_reader :username

    def initialize(username)
        @username = username
    end

    def tweets
        # select all the tweets that the
        # current user has written
        Tweet.all.select do |tweet|
            tweet.user == self
        end
    end

    def post_tweet(message)
        tweet = Tweet.new(message, self)
        # Tweet.all << tweet
    end

    def like_tweet(tweet)
        # creates a like connecting this user
        # and tweet argument
        like = Like.new(self, tweet)
        # if self != tweet.user
        #     like = Like.new(self, tweet)
        # else
        #     puts "You can't like your own tweet"
        # end
    end

    def liked_tweets
        # returns all tweets the current user
        # has liked
        likes = Like.all.select do |like|
            like.user == self
        end
        likes.collect {|like| like.tweet}

        # Like.all.collect do |like|
        #     if like.user == self
        #         like.tweet
        #     end
        # end.compact
    end

end

