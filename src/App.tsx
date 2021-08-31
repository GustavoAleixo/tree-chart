import "./style.css"

import { useState } from "react";

import {
  MockExample,
  clientExample,
  productExample1,
  productExample2
} from "./utils/example"

import { Tree } from "./components/Tree"

function App() {
  const [client, setClient] = useState<MockExample>();
  const [product, setProduct] = useState<MockExample>();
  const [other, setOther] = useState<MockExample>();

  return (
    <div className="App">

      <Tree
        data={clientExample}
        setData={setClient}
      />

      {
        client &&
        <Tree
          data={productExample1}
          setData={setProduct}
        />
      }

      {
        product &&
        <Tree
          data={productExample2}
          setData={setOther}
        />
      }

    </div>
  );
}

export default App;
