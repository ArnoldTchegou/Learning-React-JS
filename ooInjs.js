//creating an object using object literals
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  draw: function () {
    console.log("draw");
  },
};

// creating objects using factories
function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("draw");
    },
  };
}

const circle1 = createCircle(1);
circle1.draw();

//creating object using constructor function
function Circle(radius) {
  this.radius = radius;
  let defaultLocation = { x: 0, y: 0 };
  //getter
  this.getDefaultLocation = function () {
    return defaultLocation;
  };
  let computeOptimumLocation = function (factor) {
    //
  };
  this.draw = function () {
    computeOptimumLocation(0.1);
    console.log("draw another");
  };

  //the best way to define getters and setters in JS is by using defineProperty
  Object.defineProperty(this, "defaultLocation", {
    get: function () {
      return defaultLocation;
    },
    set: function (value) {
      if (!value.x || !value.y) {
        throw new Error("Invalide location");
      }
      defaultLocation = value;
    },
  });
}

const another = new Circle(1);

//adding properties to objects
another.location = { x: 1, y: 2 };

//Enumerating properties in an object
for (let key in another) {
  console.log(key, another[key]);
}
const value = { x: 1, y: 2 };
another.defaultLocation = value;

//clonning an object
const anotherCircle = {};
for (let key in another) {
  //old practice
  anotherCircle[key] = another[key];
  //new practice
  const newCircle = Object.assign({}, another);
}
