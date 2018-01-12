let menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  }, // close this courses

  get appetizers() {
    return this._courses.appetizers;
  },

  set appetizers(appetizerIn) {
    this._courses.appetizers = appetizerIn;
  },

  get mains() {
    return this._courses.mains;
  },

  set mains(mainsIn) {
    this._courses.mains = mainsIn;
  },

  get desserts() {
    return this._courses.desserts;
  },

  set desserts(dessertsIn) {
    this._courses.desserts = dessertsIn;
  },

  get courses() {
    return this._courses;
  },

  addDishToCourse: function(courseName, dishName, dishPrice) {
    let dish = {
      name: dishName,
      price: dishPrice,
    };
    return this.courses[courseName].push(dish);
  },

  getRandomDishFromCourse: function(courseName) {
    let dishes = this.courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },

  generateRandomMeal: function() {
    let appetizers = this.getRandomDishFromCourse('appetizers');
    let mains = this.getRandomDishFromCourse('mains');
    let desserts = this.getRandomDishFromCourse('desserts');
    let totalPrice = appetizers.price + mains.price + desserts.price;
    return `Your meal is ${appetizers.name}, ${mains.name}, ${desserts.name}. The price is ${totalPrice}.`;
  },
}; // end of menu object



menu.addDishToCourse('appetizers', 'Boo rolls', 3.15);
menu.addDishToCourse('mains', 'chicken', 10);
menu.addDishToCourse('desserts', 'Sweet Cream', 3.15);

menu.addDishToCourse('appetizers', 'spring rolls', 3.15);
menu.addDishToCourse('mains', 'burrito', 10);
menu.addDishToCourse('desserts', 'Ice Cream', 3.15);


/*console.log(
  'Our menu today is : ' +
    menu.appetizers[0].name +
    ' for appetizers. ' +
    menu.mains[0].name +
    ' for main courses ' +
    ' and ' +
    menu.desserts[0].name +
    ' for desserts. Enjoy!'
);*/


const meal = menu.generateRandomMeal();
console.log(meal);
