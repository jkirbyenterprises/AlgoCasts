// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

// function matrix(n) {
    // let counter = 1;
    // let sprialMatrix = [];
    // let startRow, startColumn = 0;
    // let endRow, endColumn = n-1;
    // while(startColumn <= endColumn && startRow <= endRow) {
    //     sprialMatrix[startRow] = [];
    //     while(startColumn++ <= endColumn) {
    //         sprialMatrix[startRow][startColumn] = counter++;
    //     }
    //     startRow++;
    //     while(startRow++ < endRow) {
    //         sprialMatrix[startRow][endColumn] = counter++;
    //     }
    //     endRow--;
    // }
// }

// Cleaned up less-less-crappy solution
function matrix(n) {
    const location = { x: 0, y: 0 }
    let direction = { x: 1, y: 0}
    let count = 0;
    
    //create the base arrays
    const sprialMatrix = Array.from({length: n}, _=> new Array(n).fill(0));

    while(++count < (n*n) + 1) {
        sprialMatrix[location.y][location.x] = count;

        // rotate 90 degrees if go outside array bounds or hit a non-zero value
        const nextLocation = {
            x: location.x + direction.x,
            y: location.y - direction.y
        }

        if(nextLocation.x >= n || nextLocation.x < 0 || nextLocation.y >= n || nextLocation.y < 0 || sprialMatrix[nextLocation.y][nextLocation.x] != 0) {
            direction = {
                x: direction.y,
                y: -direction.x
            }
        }

        location.x += direction.x;
        location.y -= direction.y;
    }

    return sprialMatrix;
}

// Cleaned up less-crappy solution
// function matrix(n) {
//     let x = 0, y = 0;
//     let movementDir = [1,0];
//     let count = 0;
    
//     //create the base arrays
//     // const sprialMatrix = [];

//     // for(let i = 0; i < n; i++) {
//     //     sprialMatrix.push(new Array(n).fill(0));
//     // }

//     // Playing with ways from https://stackoverflow.com/questions/53992415/how-to-fill-multidimensional-array-in-javascript
//     const sprialMatrix = Array.from({length: n}, _=> new Array(n).fill(0));

//     while(++count < (n*n) + 1) {
//         sprialMatrix[y][x] = count;

//         // test if time to turn
//         let nextX = x + movementDir[0];
//         let nextY = y - movementDir[1];
//         if(nextX >= n || nextX < 0 || nextY >= n || nextY < 0 || sprialMatrix[nextY][nextX] != 0) {
//             movementDir = [movementDir[1], -movementDir[0]];
//         }

//         x += movementDir[0];
//         y -= movementDir[1];
//     }

//     return sprialMatrix;
// }

// My crappy first solution using vector rotation
// function matrix(n) {
//     let x = 0;
//     let y = 0;
//     let movementDir = [1,0];
//     let count = 1;
//     let step = 0;

//     //create the base arrays
//     const sprialMatrix = [];
//     for(let i = 0; i < n; i++) {
//         sprialMatrix.push(new Array(n).fill(0));
//     }


//     while(step++ < n*n) {
//         sprialMatrix[y][x] = count;

//         // test of time to turn
//         let nextX = x + movementDir[0];
//         let nextY = y - movementDir[1];
//         if(nextX > n || nextX < 0 || nextY > n || nextY < 0 || !sprialMatrix[nextY]|| sprialMatrix[nextY][nextX] != 0) {
//             movementDir = [movementDir[1], -movementDir[0]];
//         }

//         x += movementDir[0];
//         y -= movementDir[1];
//         count++;
//     }

//     return sprialMatrix;
// }

module.exports = matrix;
