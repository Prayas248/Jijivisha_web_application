
import "./value.css"
import leaf from "../../assets/leaf.png"

 function Values() {
  return (
    <div className="values">
      <div className="title">
        <span className="blackText">Jijivisha: </span>
        <span className="redText">Our Values</span>
      </div>

      <div className="mainValues">

        <div className="valueCard">
          <div className="valueImageContainer">
            <img src={leaf} className="valueImage" />
          </div>
          <div className="valueParaContainer">
            <h3>Sustainability</h3>
            <div className="valuePara">Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim laexcepteur officia. it irure elit unt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duisulpa .,</div>
          </div>
        </div>

        <div className="valueCard">
          <div className="valueParaContainer">
            <h3>Sustainability</h3>
            <div className="valuePara">Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim laexcepteur officia. it irure elit unt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duisulpa .,</div>
          </div>
          <div className="valueImageContainer">
            <img src={leaf} className="valueImage" />
          </div>
        </div>

        <div className="valueCard">
          <div className="valueImageContainer">
            <img src={leaf} className="valueImage" />
          </div>
          <div className="valueParaContainer">
            <h3>Sustainability</h3>
            <div className="valuePara">Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim laexcepteur officia. it irure elit unt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duisulpa .,</div>
          </div>
        </div>

      </div>
    </div>
  )
}
export default Values