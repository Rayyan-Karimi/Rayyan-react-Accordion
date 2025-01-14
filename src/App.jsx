import { useState } from "react";
import "./App.css";
import Accordion from "./components/Accordion";

function App() {
  const accordionItems = [
    {
      id: 0,
      title: "What is React?",
      content: "React is a JavaScript library for building user interfaces.",
      isActive: false,
    },
    {
      id: 1,
      title: "Why use React?",
      content:
        "React is a popular choice for building web applications due to its simplicity and flexibility.",
      isActive: false,
    },
    {
      id: 2,
      title: "What is React?",
      content: "React is a JavaScript library for building user interfaces.",
      isActive: false,
    },
    {
      id: 3,
      title: "Why use React?",
      content:
        "React is a popular choice for building web applications due to its simplicity and flexibility.",
      isActive: false,
    },
  ];

  const [items, setItems] = useState(accordionItems);
  const [isMultiple, setIsMultiple] = useState(false);

  const handleMultiple = (event) => {
    const allowMultiple = event.target.checked;
    setIsMultiple(allowMultiple);
    console.log("In > multiple:", allowMultiple);
    if (!allowMultiple)
      setItems((prev) => prev.map((item) => ({ ...item, isActive: false })));
  };

  return (
    <div className="App m-2">
      <label className="flex justify-center gap-4 items-center">
        <input
          type="checkbox"
          id="checkbox"
          checked={isMultiple}
          onChange={(e) => handleMultiple(e)}
        />
        <span> Is multiple accordion allowed?</span>
      </label>
      <Accordion
        items={items}
        setItems={setItems}
        isMultiple={isMultiple}
        setIsMultiple={setIsMultiple}
      />
    </div>
  );
}

export default App;
