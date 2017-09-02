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

  lines.forEach(line => {
    let v1 = line[0];
    let v2 = line[1];
    vertexMap[v1] = vertexMap[v1] || [];
    vertexMap[v1].push(v2);
    vertexMap[v2] = vertexMap[v2] || [];
    vertexMap[v2].push(v1);
  })

  

  return vertexMap;
};

console.log(connectedComponents('/Users/yili/Desktop/10x_Club_Exercises/coding_exercises/testFile.txt'));
