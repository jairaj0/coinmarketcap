import React,{useState, useEffect} from 'react'
import "./contentScss/content.css";
import Info from "../info/Info";


function Content() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const row = document.querySelector('.content_header_show_rows');
  let rowNum = 100;

function rowChange(){
  row.innerHTML = '100';
  rowNum = 100;
}

  useEffect(() => {
    fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${rowNum}&page=1 &sparkline=false`)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },      (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
         items.map(val => (
          <Info
          key={val.market_cap_rank}
          hatch_count={val.market_cap_rank}
          name_value_img={val.image}
          daily_value_num_value={(val.market_cap_change_percentage_24h).toFixed(2)}
          week_value_num_value={(val.ath_change_percentage).toFixed(2)}
          name_value={val.name}
          price_value={(val.current_price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          market_cap_value={(val.market_cap).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          volume_value={(val.total_volume).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          volume_value_btm={(val.market_cap).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          circulating_value={(val.circulating_supply).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          graph={val.graph}
          graphS={val.graphS}
        /> )
        )
    );
  }
}

export default Content;

