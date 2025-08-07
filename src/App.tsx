import Card, { CardBody } from "./components/Card";
import List from "./components/List";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = () => setIsLoading(!isLoading);

  const list = ["Goku", "Tanjiro", "Eren"];
  const handleSelect = (elemento: string) => {
    console.log("imprimiendo", elemento);
  };
  return (
    <Card>
      <CardBody title="Hola mundo" text="Este es el texto" />
      <List data={list} onSelect={handleSelect} />
      <Button isLoading={isLoading} onClick={handleClick}>
        Hola mundo
      </Button>
    </Card>
  );
}

export default App;
