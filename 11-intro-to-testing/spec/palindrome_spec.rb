require_relative "../palindrome.rb"

describe "PalindromeChecker" do 

    let (:checker) {PalindromeChecker.new}

    it "returns true when word is a palindrome" do
        expect(checker.is_palindrome?("racecar")).to be(true)
    end

    it "returns false when word is not a palindrome" do 
        expect(checker.is_palindrome?("banana")).to be(false)
    end

    it "raises an error when input is not a string" do
        expect{checker.is_palindrome?(7)}.to raise_error ArgumentError
    end

    it "raises an error when input is a symbol" do
        expect{checker.is_palindrome?(:racecar)}.to raise_error ArgumentError
    end

    it "ignores case" do
        expect(checker.is_palindrome?("Racecar")).to be(true)
    end

    it "ignores spaces" do
        expect(checker.is_palindrome?("go hang a salami im a lasagna hog")).to be(true)
    end

    it "ignores punctation" do 
        expect(checker.is_palindrome?("madam i'm adam")).to be(true)
    end
end

describe "MathChecker" do 

    it "can add numbers" do 
        expect(2+2).to eq(4)
    end
end