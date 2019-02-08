class ApplicationController < ActionController::API
  def secret_key
    'h3llo'
  end

  def encode(payload)
    JWT.encode(payload, secret_key, "HS256")
    #return a token
  end

  def decode(token)
    JWT.decode(token, secret_key, true,{algorith: 'HS256'})[0]
    #return the payload
  end
end
