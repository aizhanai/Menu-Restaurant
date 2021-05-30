import React, { Component } from "react";
import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      menu: [
        {
          id: 1,
          title: "buttermilk pancakes",
          category: "breakfast",
          price: 15.99,
          img: "./images/item-1.jpeg",
          desc:
            "`I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `"
        },
        {
          id: 2,
          title: "diner double",
          category: "lunch",
          price: 13.99,
          img: "./images/item-2.jpeg",
          desc:
            "`vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `"
        },
        {
          id: 3,
          title: "godzilla milkshake",
          category: "shakes",
          price: 6.99,
          img: "./images/item-3.jpeg",
          desc:
            "`ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`"
        },
        {
          id: 4,
          title: "country delight",
          category: "breakfast",
          price: 20.99,
          img: "./images/item-4.jpeg",
          desc:
            "`Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `"
        },
        {
          id: 5,
          title: "egg attack",
          category: "lunch",
          price: 22.99,
          img: "./images/item-5.jpeg",
          desc:
            "`franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `"
        },
        {
          id: 6,
          title: "oreo dream",
          category: "shakes",
          price: 18.99,
          img: "./images/item-6.jpeg",
          desc:
            "`Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`"
        },
        {
          id: 7,
          title: "bacon overflow",
          category: "breakfast",
          price: 8.99,
          img: "./images/item-7.jpeg",
          desc:
            "`carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `"
        },
        {
          id: 8,
          title: "american classic",
          category: "lunch",
          price: 12.99,
          img: "./images/item-8.jpeg",
          desc:
            "`on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `"
        },
        {
          id: 9,
          title: "quarantine buddy",
          category: "shakes",
          price: 16.99,
          img: "./images/item-9.jpeg",
          desc:
            "`skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`"
        },
        {
          id: 10,
          title: "steak dinner",
          category: "dinner",
          price: 39.99,
          img: "./images/item-10.jpeg",
          desc:
            "`skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`"
        }
      ],
      activeCat: "all",
      categories: ["all"],
      totalPrice: 0
    };
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.getCategories();
  }
  getCategories = () => {
    const categories = ["all"];
    this.state.menu.forEach((menu) => {
      if (!categories.includes(menu.category)) {
        categories.push(menu.category);
      }
    });
    // const categories = this.state.menu.reduce((acc, cum) => {
    //   if(!acc.includes(cum.category)){
    //     acc.push(cum.category);
    //   }
    //   return acc
    // },['all'])
    this.setState({ categories });
  };

  onCatClick = (activeCat) => {
    this.setState({ activeCat });
  };
  addToCart = (price) => {
    const totalPrice = this.state.totalPrice + price;
    this.setState({ totalPrice });
  };
  render() {
    console.log("render");
    const filteredMenu = this.state.menu.filter((menu) => {
      return (
        this.state.activeCat === "all" || menu.category === this.state.activeCat
      );
    });
    return (
      <div>
        <div className="categories">
          {this.state.categories.map((cat) => {
            const cl = this.state.activeCat === cat ? "active" : "";
            return (
              <button
                key={cat}
                className={cl}
                onClick={() => this.onCatClick(cat)}
              >
                {cat}
              </button>
            );
          })}
        </div>
        <div>Card: ${this.state.totalPrice}</div>
        <ul>
          {filteredMenu.map((m) => {
            return (
              <li key={m.title}>
                {m.title} - {m.price}{" "}
                <button onClick={() => this.addToCart(m.price)}>
                  Add to Card
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
