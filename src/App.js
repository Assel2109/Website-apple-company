import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Items from "./components/Items"


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          id: 1,
          title: 'Kerapoxy Epoxy Grout 2 kg',
          img: 'KERAPOXY EPOXY GROUT.jpg',
          desc: 'Kerapoxy Epoxy Grout 2kg',
          category: 'building mixes',
          price: '76,75'
        },
        {
          id: 2,
          title: 'Putty Danogipssuperfinish 28 kg',
          img: 'PUTTY DANOGIPSSUPERFINISH.jpg',
          desc: 'Putty Danogipssuperfinish 28 kg',
          category: 'building mixes',
          price: '40'
        },
        {
          id: 3,
          title: 'Polymer Moisture-Resistant Putty Bergauf Uni Pasta 25 kg',
          img: 'POLYMER MOISTURE-RESISTANT PUTTY BERGAUF UNI PASTA.jpg',
          desc: 'Polymer Moisture-Resistant Putty Bergauf Uni Pasta 25 kg',
          category: 'building mixes',
          price: '37,38'
        },
        {
          id: 4,
          title: 'Grout Bergauf Elast Polymer Goth. Polym. for Interplate Seams Beige 2 kg',
          img: 'GROUT BERGAUF ELAST POLYMER GOTH. POLYM. FOR INTERPLATE SEAMS BEIGE.jpg',
          desc: 'Grout Bergauf Elast Polymer Goth. Polym. for Interplate Seams Beige 2 kg',
          category: 'building mixes',
          price: '30,05'
        },
        {
          id: 5,
          title: 'Glue D Tiles FLX24 (Fleksmortel) White 25 kg',
          img: 'GLUE D TILES FLX24 (FLEKSMORTEL) WHITE.jpg',
          desc: 'Glue D Tiles FLX24 (Fleksmortel) White 25 kg',
          category: 'building mixes',
          price: '22,7'
        },
        {
          id: 6,
          title: 'Grouting For Seams Epoxyelite E.10 Cocoa 1kg',
          img: 'GROUTING FOR SEAMS EPOXYELITE E.10 COCOA.jpg',
          desc: 'Grouting For Seams Epoxyelite E.10 Cocoa 1kg',
          category: 'building mixes',
          price: '21,84'
        },
      ]
    }
  }
  render() {
  return (
    <div className="wrapper">
      <Header />
      <Items items={this.state.items} />
      <Footer />
      </div>
  );
}
}

export default App;
