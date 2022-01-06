// WEB SERVICES
    // data exchange systems
    // NOT the same thing as an API *** 
    // ANY software, app or cloud tech that uses HTTP or HTTPS (web protocols) to connect and exchange data


    // Web Services platforms
        // XML (extensive markup language) marks up the data with human readable tags
        // SOAP (Simple Object Access Protocol) sends the message
        // WSDL (web service definition language) describes the service's accessibility


    // components/protocols that web services use:
        // REST      - API based tasks using HTTP protocols
        // SOAP      - XML based tasks using HTTP or SMTP protocols
        // UDDI      - Universal description discovery and integration - XML based, basically a web information registry for businesses (ex: ecommerce)
        // XML-RPC   - Remote Procedure Call - most basic XML protocol, uses HTTP to transfer data from client to server


    // SOAP VS REST Web Services (amazon and eBay use both of these)
         REST // - lightweight, readable, easier to build
              // - cons: - point to point communication, lack of standards
     
         SOAP // - easier to consume, more standards
              // - cons: difficult set-up, more convoluted code, harder to develop

         
    // RESTful Web Services
        // uses HTTP and supports HTTP methods like: 
         GET, POST, PUT, DELETE
   

    // SOAP Web Services
        // uses XML and HTTP and SMTP for transmission that has a envelope, header, body, and fault and looks like: 
            <?xml version='1.0' ?>
                <env:Envelope xmlns:env="http://www.w3.org/2003/05/soap-envelope"> 
                     <env:Header>   
                       .........
                 </env:Body>
            </env:Envelope>


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



// API's


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


