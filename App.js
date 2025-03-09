 const parent = React.createElement("div",
       {id:"parent"},
       React.createElement("div",
              {id:"child"},
              [
       React.createElement("h1",{},"I am in h1 tag"),
       React.createElement("h1",{},"I am in h1 tag")
       ]),
       React.createElement("div",{id:"child2"},
        [React.createElement("h1",{},"hey"),
         React.createElement("h1",{},"hey")    
        ]
       ))
       console.log(parent);

const heading = React.createElement("h1",{id:"headd"},"Hello React");
       const root = ReactDOM.createRoot(document.getElementById("root"));
       root.render(parent);