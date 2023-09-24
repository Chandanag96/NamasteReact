// const heading = React.createElement(
//     "h1",
//     {id:"heading"},
//     "Hello React!"
//     );
const parent = React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child1"},[
        React.createElement("h1",{},"child1 H1 tag"),
        React.createElement("h2",{},"child1 h2 tq")
    ]),
    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{},"child1 H1 tag"),
        React.createElement("h2",{},"child1 h2 tq")

    ])
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);