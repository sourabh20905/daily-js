function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

const counter = outer();

counter(); // 1
counter(); // 2
counter(); // 3

// What’s happening?

// outer() runs and returns inner

// outer() finishes execution

// BUT inner() still remembers count

// This memory is called a closure
