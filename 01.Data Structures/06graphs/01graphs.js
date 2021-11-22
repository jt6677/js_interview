/**
 * tree is a type of graphs
 */

//See 01graphsjs.png
//Edge List
const graph = [
  [0, 2],
  [2, 3],
  [2, 1],
  [1, 3],
]
//Adjacent List
//index is the actual node
const graph1 = [[2], [2, 3], [0, 1, 3], [1, 2]]

//Adjacent Matrix
const graph2 = [
  //index of 0 has connection with index of 2
  [0, 0, 1, 0],
  [0, 0, 1, 1],
  [1, 1, 0, 1],
  [0, 1, 1, 0],
]
