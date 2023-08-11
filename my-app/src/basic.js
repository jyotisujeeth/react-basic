// const myElement = <h1>I Love JSX!</h1>;

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myElement);


const myElement = React.createElement('h1', {}, 'I do not use JSX!');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
const myElement = <h1>React is {5 + 5} times better with JSX</h1>;
//const myElement = (
  <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
  </ul>
);
const myElement = (
  <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
  </ul>
//One Top Level Element
// const myElement = (
//   <div>
//     <p>I am a paragraph.</p>
//     <p>I am a paragraph too.</p>
//   </div>
// );

const myElement = (
  <div>
    <p>I am a paragraph.</p>
    <p>I am a paragraph too.</p>
  </div>
);
//const myElement = <input type="text" />;
const myElement = <input type="text" />;

//
const myElement = <h1 className="myclass">Hello World</h1>;

//Conditions - if statements
const x = 5;
let text = "Goodbye";
if (x < 10) {
  text = "Hello";
}

const myElement = <h1>{text}</h1>;
const x = 5;
let text = "Goodbye";
if (x < 10) {
  text = "Hello";
}

const myElement = <h1>{text}</h1>;

const myElement = <h1 className="myclass">Hello World</h1>;
