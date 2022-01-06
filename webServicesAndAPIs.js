// WEB SERVICES
    // data exchange systems
    // NOT the same thing as an API *** 
    // ANY software, app or cloud tech that uses HTTP or HTTPS (web protocols) to connect and exchange data


    // Web Services platforms
        // XML   (extensive markup language) marks up the data with human readable tags
        // SOAP  (Simple Object Access Protocol) sends the message
        // WSDL  (web service definition language) describes the service's accessibility


    // components/protocols that web services use:
        // REST      - API based tasks using HTTP protocols
        // SOAP      - XML based tasks using HTTP or SMTP protocols
        // UDDI      - Universal description discovery and integration - XML based, basically a web information registry for businesses (ex: ecommerce)
        // XML-RPC   - Remote Procedure Call - most basic XML protocol, uses HTTP to transfer data from client to server


    // HTTP - a protocol
        // list of commands used by browsers and web servers to communicate 
        // example:
            Browser: GET /path/to/file/index.html HTTP/1.0
            Server: HTTP/1.0 200 OK (then page source code goes here)


    // SOAP VS REST Web Services (amazon and eBay use both of these):

         REST   // - interface API, easier and lighter, uses URLs (example: Google Maps API is a REST service)
                // - lightweight, readable, easier to build
                // - cons: - point to point communication, lack of standards
                // - uses HTTP and JSON
                // - supports HTTP methods like: GET, POST, PUT, DELETE
         
                    // REST Request:
                        GET https://api.twitter.com/1.1/friends/list.json?cursor=-1&screen_name=twitterapi&skip_status=true&include_user_entities=false
                    
                    // some use CURL
                       $ curl --request GET 
                          --url 'https://api.twitter.com/1.1/followers/ids.json?screen_name=twitterdev' 
                          --header 'authorization: OAuth oauth_consumer_key="consumer-key-for-app", 
                          oauth_nonce="generated-nonce", oauth_signature="generated-signature", 
                          oauth_signature_method="HMAC-SHA1", oauth_timestamp="generated-timestamp", 
                          oauth_version="1.0"'

     
         SOAP   // - more complicated, more traffic, uses XML
                // - easier to consume, more standards
                // - cons: difficult set-up, more convoluted code, harder to develop
                // - uses XML and XMLHttpRequest syntax
         
                    // SOAP Request:
                        var xhttp = new XMLHttpRequest(); *** 
                        xhttp.onreadystatechange = function() {
                             if (this.readyState == 4 && this.status == 200) {
                                 alert(this.responseText);
                             }
                        };
                        xhttp.open("POST", "Your Rest URL Here", true);
                        xhttp.setRequestHeader("Content-type", "application/json");
                        xhttp.send("Your JSON Data Here");

                    // XML (envelope, header, body, fault):
                        <?xml version="1.0"?>
                        <soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope">
                          <soap:Header>
                          </soap:Header>
                          <soap:Body>
                            <m:GetUser>
                              <m:UserId>123</m:UserId>
                            </m:GetUser>
                          </soap:Body>
                        </soap:Envelope>
        
         
     // PAYLOAD - data sent over the internet, and when a payload is “heavy,” it requires more resources. 
         // rest's payload is lighter while soaps payload is heaver

 

// API vs Web Services
    // web services faciliate interaction bt 2 machines over a network
    // apis faciliate interaction bt two different applications

    // DIFFERENCES:
        // ALL web services can be APIS BUT not all APIs can be web services
        // web service can only be hosted on Internet Information Services (IIS) BUT APIS can be hosted within an APP 
        // web services are NOT open source BUT APIS are open source
        // web services are used to understand JSON or XML BUT APIS are only used for XML
        // Web services are NOT lightweight BUT APIs are lightweight and have limited bandwidth
        // web services can ONLY use SOAP, REST, and XML-RPC BUT APIs can use ANY Form of communication
        // web services ONLY support HTTP BUT APIs support URL request/response headers, caching, versioning, content formats

     // SIMILARITIES: 
        // both are accessed through HTTP/HTTPS to enable communication between servers and customers
        // both call a function, process data, and receive a response



// 3 Tools/Methods/Techniques for making HTTP requests in JavaScript:

    // 1: fetch() - API, provides interface for fetching data, built into the window object so doesn't need to be installed

            fetch(url)
                .then(function(response) {
                    return response.json();
                }).then(function(myJSON) {
                    console.log(JSON.stringify(myJSON));
                })

    // 2: Axios - library that lets you make http requests, automatically transforms JSON data for you instead of having to stringify json, must install it in npm to use it

            const fetchUsers = () => {
                axios.get('https://jsonplaceholder.typicode.com/users')
                    .then(response => {
                        const users = response.data;
                        console.log(`GET list users`, users);
                        // append to DOM
                        appendToDOM(users);
                    })
                    .catch(error => console.error(error));
            };
            fetchUsers();

    // 3: AJAX - asynchronous (do multiple things without refreshing the page) JS and XML, builds websites and apps, NOT a language, accesses web servers from a web page
        
            function getJSON() {
              var ajax_req = new XMLHttpRequest();
              ajax_req.open('GET', 'https://jsonplaceholder.typicode.com/todos', true);
              ajax_req.onload = function () {
                if (this.status === 200) {
                  var json = JSON.parse(this.responseText);
                  var row = '';
                  for (i in json) {
                    row += '<tr><td>' + json[i].userId +
                      '</td><td>' +
                      json[i].id + '</td><td>' +
                      json[i].title + '</td><td>' +
                      json[i].completed + '</td></tr>';
                  }
                  document.getElementById('users').innerHTML = row;
                }
              }
              ajax_req.send();
            }
            window.onload = getJSON();



// examples: 

    const addItemToList = (list, item) => {
        return [...list, item];
    };

    let item;
      fetch('https://anything.com/endpoint')
        .then(response => {
          if (!response.ok) {
            item = {};
          }

          item = response.json();
       });


// example:

    const fetchData = () => {
          const stringifyData = data => JSON.stringify(data, null, 2)
          const initialData = stringifyData({ data: null })
          const loadingData = stringifyData({ data: 'loading...' })
          const [data, setData] = useState(initialData)

          const [gender, setGender] = useState('female')
          const [loading, setLoading] = useState(false)

          useEffect(
            () => {
              const fetchData = () => {
                setLoading(true)
                const uri = 'https://randomuser.me/api/?gender=' + gender
                fetch(uri)
                  .then(res => res.json())
                  .then(({ results }) => {
                    setLoading(false)
                    const { name, gender, dob } = results[0]
                    const dataVal = stringifyData({
                      ...name,
                      gender,
                      age: dob.age
                    })
                    setData(dataVal)
                  })
              }
              fetchData()
            },
            [gender]
          )

          return (
            <>
              <button
                onClick={() => setGender('male')}
                style={{ outline: gender === 'male' ? '1px solid' : 0 }}
              >
                Fetch Male User
              </button>
              <button
                onClick={() => setGender('female')}
                style={{ outline: gender === 'female' ? '1px solid' : 0 }}
              >
                Fetch Female User
              </button>

              <section>
                {loading ? <pre>{loadingData}</pre> : <pre>{data}</pre>}
              </section>
            </>
          )
    }


// helpful links:
    https://nicklusk.com/javascript-api-return-json-display.html
    https://jsonplaceholder.typicode.com/
