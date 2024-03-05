import { useState } from "react";
import "./index.css";

let accordion = [
  {
    id: 1,
    head: "Heading",
    status: false,
    content:
      "Master modern React from beginner to advanced! Context API, React Query, Redux Toolkit, Tailwind, advanced patterns",
  },
  {
    id: 2,
    head: "Heading",
    status: true,
    content:
      "React from beginner to advanced! Context API, React Query, Redux Toolkit, Tailwind, advanced patterns",
  },
  {
    id: 3,
    head: "Heading",
    status: false,
    content:
      "Context API, React Query, Redux Toolkit Master modern React from beginner to advanced! Master modern , Tailwind, advanced patterns",
  },
];

// function Header() {
//   return (
//     <header>
//       <div>Home</div>
//       <div>Services</div>
//       <div>Contact</div>
//     </header>
//   );
// }
// function Button({ color, txt, children }) {
//   return (
//     <button data-txt={txt} style={{ color: color }}>
//       {children}
//     </button>
//   );
// }

function Accordion({ data }) {
  const [accordionStatus, setStatus] = useState(1);
  return (
    <div className="accordion-wrapper">
      {data.map((el) => (
        <AccordionItem
          curStatus={accordionStatus}
          onSetStatus={setStatus}
          key={el.id}
          heading={el.head}
          content={el.content}
          status={el.status}
          id={el.id}
        />
      ))}
    </div>
  );
}

function AccordionItem({ heading, content, curStatus, id, onSetStatus }) {
  let toOpen = id === curStatus;
  function updateStatus() {
    onSetStatus(toOpen ? null : id)
  }
  return (
    <div className="accordion-box">
      <div className="head" onClick={updateStatus}>
        <div>
          {heading} {id}
        </div>
        <span className="icon">{toOpen === true ? "-" : "+"}</span>
      </div>
      {toOpen && <div className="content">{content}</div>}
    </div>
  );
}

function App() {
  return (
    <>
      {/* <Header />
      <Button txt={"Left"} color={"red"}>
        👈 Left
      </Button>
      <Button txt={"Left"} color={"gold"}>
        Right 👉
      </Button> */}

      <Accordion data={accordion} />
    </>
  );
}

export default App;
