import morningImage from './../assets/morning.jpg';
import dayImage from './../assets/day.jpg';
import Search from './Search'
import "./../App.css"

const Card = (props) => {

  const backgroundImage = props.temp > 28 ? `url(${dayImage})` : `url(${morningImage})`;

  const cardStyle = {
    width: "18rem",
    height: "450px",
    background: backgroundImage,
    
  };
   


const sunriseMilliseconds = props.sunrise * 1000;
const sunsetMilliseconds = props.sunset * 1000;

const sunriseDate = new Date(sunriseMilliseconds);
const sunsetDate = new Date(sunsetMilliseconds);

const sunriseTime = sunriseDate.toLocaleTimeString(); 
const sunsetTime = sunsetDate.toLocaleTimeString();

    
    return (

        <div className="card-wrapper d-flex flex-column justify-content-center align-items-center">
  <Search search={props.search} text={props.text} />

  <div
    className="card flex-column justify-content-between"
    style={cardStyle}
  >
    <div className="tempdiv d-flex flex-column" style={{ paddingLeft: "20px", paddingTop: "75px", margin: "0px" }}>
      <h1>{props.temp}&deg;C</h1>
      <p>Feels like: {props.feel}&deg;C</p>
      <p>Humidity: {props.humidity}%</p>
      <p>Windspeed: {props.wind}Km/h</p>
    </div>
    <div className="card-body d-flex flex-column justify-content-end align-items-center">
      <h1 className="text-center">{props.city.toUpperCase()}</h1>
      <p className='text-center' style={{'margin': '0px'}}>Sunrise: {sunriseTime}</p>
      <p className='text-center' style={{'margin': '0px'}}>Sunset: {sunsetTime}</p>
    </div>
  </div>
</div>

    )
}

export default Card
