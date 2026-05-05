import { useState } from "react";
import Counter from "./Counter";

export default function CounterApp() {
  const [show2, setShow2] = useState(true);

  function handleChange(e) {
    setShow2(e.target.checked);
  }
  return (
    <div className="">
      {show2 ? <Counter key='sl' name="sl"/> : <Counter key='fz' name="fz"/>}
      {/* {show2 ? <Counter name="budi"/> : <Counter name="fz"/>} */}
      {/* {show2 ? <Counter name="budi"/> : <p>Hilang</p>} */}
      {/* {show2 ? (
        <div className="">
          <Counter name="2" />
        </div>
      ) : (
        <section>
          <Counter name="1" />
        </section>
      )} */}
      {/* {show2 && <Counter name="fz" />}
      {!show2 && <Counter name="ss" />} */}
      <input type="checkbox" checked={show2} onChange={handleChange} />
      Tampilan Dua
    </div>
  );
}
