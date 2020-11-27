const fetchData = async () => {
  var promises = [];
  console.log('fetchData: ')
  // const response = await fetch(
  //   'data/geo/world.geo.json',
  // );
  // const world = await response.json();
  // console.log('world: ', world)
  let data = {};
  //countries
  promises.push(
    fetch('data/geo/world.geo.json')      
    .then(res => res.json())
    .then(data => {
      return { key: 'world', data }
    })
  )
  //countries
  promises.push(
    fetch('data/geo/populated_places.geojson')      
    .then(res => res.json())
    .then(data => {
      return { key: 'cities', data }
    })
  )
  //一带一路
  promises.push(
    fetch('data/world/BnR.json')      
    .then(res => res.json())
    .then(data => {
      data.map( v => {
        v.bnr = 1
      })
      return { key: 'bnr', data }
    })
  )
  //东盟
  promises.push(
    fetch('data/world/ASEAN.json')      
    .then(res => res.json())
    .then(data => {
      data.map( v => {
        v.asean = 1
      })
      return { key: 'asean', data }
    })
  )
  //金砖
  promises.push(
    fetch('data/world/BRICS.json')      
    .then(res => res.json())
    .then(data => {
      data.map( v => {
        v.brics = 1
      })
      return { key: 'brics', data }
    })
  )
  //欧盟
  promises.push(
    fetch('data/world/EU.json')      
    .then(res => res.json())
    .then(data => {
      data.map( v => {
        v.eu = 1
      })
      return { key: 'eu', data }
    })
  )
  //周边
  promises.push(
    fetch('data/world/peripheral.json')      
    .then(res => res.json())
    .then(data => {
      data.map( v => {
        v.peripheral = 1
      })
      return { key: 'peripheral', data }
    })
  )
  // RECP
  promises.push(
    fetch('data/world/rcep.json')      
    .then(res => res.json())
    .then(data => {
      data.map( v => {
        v.rcep = 1
      })
      return { key: 'rcep', data }
    })
  )
  // 书展
  promises.push(
    fetch('data/world/rcep.json')      
    .then(res => res.json())
    .then(data => {
      data.map( v => {
        v.rcep = 1
      })
      return { key: 'rcep', data }
    })
  )
  //book fair
  promises.push(
    fetch('data/book/bookfair.json')      
    .then(res => res.json())
    .then(data => {
      data.map( v => {
        // console.log(moment(v.dtstart).format("YYYY-MM-DD"))
        // v.dtstart = moment(v.dtstart, "YYYY-MM-DD")
        // v.dtend = moment(v.dtend, "YYYY-MM-DD")
        v.fair = 1
      })
      return { key: 'fairs', data }
    })
  )
  return Promise.all(promises).then(rows => {
    rows.forEach((v)=>{
      console.log(v)
      data[v.key] = v.data
    })
    console.log('data: ', data)
    return data
  });
}

// module.exports = {
//   fetchData,
// }