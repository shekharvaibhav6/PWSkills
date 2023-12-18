import './App.css'
import Button from './Button'
import List from './List'
import Header from './Header'
import Person from './Person';

//2nd Assignment execution
// const App = () => {
//   const handleClick = () => {
//     alert('Button Clicked!');
//     // Add any other logic you want to execute on button click
//   };

//   return (
//     <div>
//       <Button text="Click me" onClick={handleClick} />
      
//     </div>
//   );
// };

// function App() {
//   return (
    
//     //1st Assignment execution
//     // <>
//     //   <Person Name="Vaibhav" Age={23}/>
//     // </>

//     //3rd Assignment Execution
//     // <>
//     // <Header title="This is header section"/>
//     // </>
//   )
// }

//4th Assignment execution
const App = () => {
  const myListItems = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <div>
      <List items={myListItems} />
      
    </div>
  );
};

export default App;

