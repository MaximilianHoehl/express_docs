app.use() to specify middleware
route paths can be Strings, String patterns or Regex
regex müssen auf bestimmte Weise angegeben werden (-> docs)

Following mathods can send some response to the client. If none of them gets called,
the client will be left hanging

Method	            Description
res.download()	    Prompt a file to be downloaded.
res.end()	        End the response process.
res.json()	        Send a JSON response.
res.jsonp()	        Send a JSON response with JSONP support.
res.redirect()	    Redirect a request.
res.render()	    Render a view template.
res.send()	        Send a response of various types.
res.sendFile()	    Send a file as an octet stream.
res.sendStatus()	Set the response status code and send its string representation as the response body.

express.Router class can be used to create modular, mountable routers