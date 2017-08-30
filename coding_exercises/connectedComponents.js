/***************************************************************************************************
  You are given a file which looks like so:
  AA BB
  DD FF
  CC EE
  EE DD
  Each line of the file contains a pair of strings. Each string represents is the name of a vertex.
  The line represents an edge connecting two vertices.
  Your task is to find the connected components of the graph.
  A connected component is a subset of vertices all connected to each other.
  In this example, the connected components are [["AA", "BB"], ["CC", "DD", "EE", "FF"]].
  You don't have to return the elements of the components in any particular order.
***************************************************************************************************/

const fs = require('fs');

const connectedComponents = file => {
  let record = fs.readFileSync(file, 'utf8');
  let lines = record.split('\n').filter(e => e).map(e => e.split(' '));
  let vertexMap = {};

  // lines.forEach(line => {
  //   vertexMap[line[0]] = line[1];
  //   vertexMap[line[1]] = line[0];
  // })
  //
  // let result = [];
  // for (let key in vertexMap) {
  //   let lastResult = result[result.length - 1] || [];
  //   lastResult.push(vertexMap[key]);
  //   if (vertexMap[vertexMap[key]]) {
  //     lastResult.push(key);
  //   }
  //   result.push(lastResult);
  // }

  return result;
};

console.log(connectedComponents('/Users/yili/Desktop/10x_Club_Exercises/coding_exercises/testFile.txt'));
