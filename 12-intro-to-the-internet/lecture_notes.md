- How the Web works
    - Network packets
        - An "atomic" unit of data (i.e., one complete piece of data)
        - Has a header with information about the data (i.e., metadata)
        - And the body, which is the data
        - Started with ARPAnet in 1960s-1970s as a way for universities to share data
        - 1980s - Tim Berners-Lee developed the WWW, linking hypertext documents into an information system
        - The Internet went from 1% of information through two-way telecommunications networks in 1993 to over 97% 15 years later.
        - Show first website.  Just HTML (hypertext markup language) with very little styling.
        - Show Chrometools of "Inspect" and "Show source".  Firefox has similar tools. 

    - Request / Response lifecycle
        - Server / Client
        - www.example.com (actual website)
            - domain name that is an alias for an ip address
            - ipv4 vs ipv6
            - ipaddress is mapped to domain name through DNS (Domain Name Server)
        - curl www.example.com
        - Types of Requests Get/Post/Put/Patch/Delete
            - Browser only supports Get and Post

    - Intro to Rack
        - Manages request/response cycle for us
        - http://rack.github.io/
            - "To use Rack, provide an "app": an object that responds to the call method, taking the environment hash as a parameter, and returning an Array with three elements:
                - The HTTP response code
                - A Hash of headers
                - The response body, which must respond to each"
            - Response / status codes (kitties)
                - 100 - Informational
                - 200 - Success
                - 300 - Redirection
                - 400 - Client Error
                - 500 - Server Error
        - Look at app.rb and config.ru
        - `rackup config.ru` and navigate to local host :9292
        
        ```rb
        req = Rack::Request.new(env)

        if req.path.match(/items/)
             @@items.each do |item|
            resp.write "#{item}\n"
        end
      ```