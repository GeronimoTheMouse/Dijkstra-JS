$(document).ready(function (){
    //we create a new instance of our graph
    const graph = new Graph();

    //we add all the corresponding vertices
    graph.addVertex("A");
    graph.addVertex("B");
    graph.addVertex("C");
    graph.addVertex("D");
    graph.addVertex("E");

    //we add all the edges to the graph
    graph.addEdge("A", "B", 5);
    graph.addEdge("A", "E", 10);
    graph.addEdge("B", "C", 20);
    graph.addEdge("B", "D", 200);
    graph.addEdge("C", "D", 2);
    graph.addEdge("E", "D", 5);

    //We perform the dijkstra algorithm to the whole graph in respect of A
    graph.dijkstra("A");
    //We display the resulting shortest path from A to D
    alert(graph.getDijkstraPath("D"));
});
