/*** 5. 무한 뺄셈 ***/

/* user code */
function answer(s, e) {
  let sequence = [];
  sequence.push(s);
  sequence.push(e);
  for ( let i = 0; ; i++ ) {
    // if ( sequence[i] - sequence[sequence.length-1] > 0) {
    //   sequence.push(sequence[i] - sequence[sequence.length-1]);
    // } else {
    //   break;
    // }
    sequence.push(sequence[i] - sequence[sequence.length-1]);
    if ( sequence[sequence.length-1] < 0 ) {
      break;
    }
  }

  return sequence;
}

/* main code */
let input = [
  // TC: 1
  [9, 3],
  // TC: 2
  [6, 3],
  // TC: 3
  [13, 7],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}
