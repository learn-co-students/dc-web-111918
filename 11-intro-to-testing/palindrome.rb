require 'pry'

class PalindromeChecker

    def is_palindrome?(word)
        raise ArgumentError if !(word.is_a? String)
        word.downcase!
        word.gsub!(" ", "")
        word.gsub!(/[^a-z0-9\s]/, "") #regex to match anything not a letter, number or whitespace
        if word.length <= 1
            return true
        elsif word[0] == word[-1]
            return is_palindrome?(word.slice(1..-2))
        else
            return false
        end
    end

end