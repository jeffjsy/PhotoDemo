/* STEP 2 Create a JavaScript file call photo.js that demonstrates the methods of three related classes for a company that develops photographs. Create an index.html file that loads the photo.js so you can test your app.In the JavaScript file, create a class named Photo that includes properties for width and height in inches.The constructor should accept values for the two properties. In the constructor, set default value for width as 8 and for height as 10.

-- Include a function price, which returns:
$4 as the price for an 8-inch by 10-inch photo
$6 as the price for a 10-inch by 12-inch photo
$10 as the price for any other size combination
Include another function called toString which returns:
"This is a [width] by [height] photo and it costs [price]"
Replace the text inside [ ] with the appropriate values.
Create two objects of this class and output toString to the console.log() to demonstrate it working. */

class Photo {
  constructor(width = 8, height = 10) {
    this.width = width;
    this.height = height;
  }

  price() {
    let finalPrice;

    if (this.width === 8 && this.height === 10) {
      finalPrice = 4;
    } else {
      if (this.width === 10 && this.height === 12) {
        finalPrice = 6;
      } else {
        finalPrice = 10;
      }
    }

    return finalPrice;
  }

  toString() {
    return `This is a ${this.width} by ${this.height} photo and it costs ${this.price()}`;
  }
}

let photo1 = new Photo(8, 10);
console.log(photo1.toString());

let photo2 = new Photo(10, 12);
console.log(photo2.toString());

let photo3 = new Photo(20, 30);
console.log(photo3.toString());

let photo4 = new Photo(55, 77);
console.log(photo4.toString());