// APIS


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

