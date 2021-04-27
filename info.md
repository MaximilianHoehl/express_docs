route                   endpoint

middleware              function that hast access to req, res and "next middleware"
                        it makes changes to the req and res objects
                        can call next middleware or end the req-res-cycle

routing methods         define how an applications endpoint reacts to user requests
                        same endpoint can handle different HTTP methods (over app.get(), app.post() etx.)
                        specifies callback (handler function)
                        can also have multiple callbacks (next() has to be provided as arg and be called)

overridung API          Express API can be overwritten:
                        -globally at express.request bzw express.response
                        -app specific at app.request bzw app.response
                        -> there you can override functions and properties of the objects (->docs)
                        
Template engines        Are used to simplify creating HTML/CSS UIs
                        (->like freemarker does). Can be installed 
                        with npm. For instance there are: 
                            -pug
                            -Mustache
                            -EJS
                            -Jade
                            -Dust..
                        Look at the docs for more details