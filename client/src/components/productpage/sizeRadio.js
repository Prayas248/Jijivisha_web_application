
import "./sizeRadio.css"

export function SizeRadio() {
  return (
    <div className="radioContainer">
      <input type="radio" name="size" id="small" />
      <label for="small">S</label>
      <input type="radio" name="size" id="medium" />
      <label for="medium">M</label>
      <input type="radio" name="size" id="large" />
      <label for="large">L</label>
    </div>
  )
}


