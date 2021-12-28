// APIS


// example: 

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

