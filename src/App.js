import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Albums from './components/Album';
import Hello from './components/Hello';
import Products from './components/Products';
import { useState } from 'react';
import Footer from './components/Footer';
import Addproduct from './components/Addproduct';


// function App(){
//   return(
//     <div>
//       <p>xin chào <Hello name="dũng"/> </p>
//       <p>xin chào <Hello name="sơn"/> </p>
//       <p>xin chào <Hello name="hùng"/> </p>
//     </div>
//   )
// }export default App

function App() {

  const [album,setAlbum ] = useState([
    { id: '1', desc: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.1',image:'https://picsum.photos/359/255' },
    { id: '2', desc: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.2',image:'https://picsum.photos/359/255' },
    { id: '3', desc: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.3',image:'https://picsum.photos/359/255' }
  ])
  const [state,setState]=useState("dung")
  const onHandle=()=>{
    setState("Hung")
  } 
  const [color1,setColor]=useState("green")
  const click=()=>{
    setColor("red")
  }
  const handleAdd=(value)=>{
    console.log('App.js', value);
  }
  return (
    
    <div className="App">
      <Header/>
      <main>
        <Banner/>
        <p>{state}</p>
        <button onClick={onHandle}>click here</button>
        <div  style={{background
          :color1,width:100,height:100}}></div>
        <button onClick={click}>changeColor</button>

        <Addproduct onAdd={handleAdd}/>

        <Albums data={album}/>
      </main>
      <Footer/>

    </div>
  )

} export default App

// function App() {
//   const album = [
//     { id: '1', desc: 'nguyễn A',image:'https://picsum.photos/359/255' },
//     { id: '2', desc: 'lê B',image:'https://picsum.photos/359/255' },
//     { id: '3', desc: 'trần C',image:'https://picsum.photos/359/255' }
//   ]
//   return (
    
//     <div className="App">
//       <Header/>
//       <main>
//         <Banner/>
//         <Albums/>
//       </main>
//       <footer className="text-muted py-5">
//       <div className="container">
//         <p className="float-end mb-1">
//           <a href="#">Back to top</a>
//         </p>
//         <p className="mb-1">Album example is © Bootstrap, but please download and customize it for yourself!</p>
//         <p className="mb-0">New to Bootstrap? <a href="/">Visit the homepage</a> or read our <a href="/docs/5.0/getting-started/introduction/">getting started guide</a>.</p>
//       </div>
//     </footer>

//     </div>
//   )

// } export default App

// function App() {
//   const myName ='Le Khac Dung1';
//   const age=25;
//   const person={
//     name: 'Le Khac Dung',
//     age:20
//   }
//   const sum=(a,b)=>{
//     return a+b;
//   }
//   return (
//     <div className="App">
//     <Header/>
//     <main>
//       <Banner/>
//       <Albums/>
//     </main>
    // <footer className="text-muted py-5">
    //   <div className="container">
    //     <p className="float-end mb-1">
    //       <a href="#">Back to top</a>
    //     </p>
    //     <p className="mb-1">Album example is © Bootstrap, but please download and customize it for yourself!</p>
    //     <p className="mb-0">New to Bootstrap? <a href="/">Visit the homepage</a> or read our <a href="/docs/5.0/getting-started/introduction/">getting started guide</a>.</p>
    //   </div>
    // </footer>
//   </div>

//   );
// }

// export default App;
