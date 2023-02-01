export function makeid(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

var adjective = [
  "Excited",
  "Anxious",
  "Overweight",
  "Demonic",
  "Jumpy",
  "Misunderstood",
  "Squashed",
  "Gargantuan",
  "Broad",
  "Crooked",
  "Curved",
  "Deep",
  "Even",
  "Excited",
  "Anxious",
  "Overweight",
  "Demonic",
  "Jumpy",
  "Misunderstood",
  "Squashed",
  "Gargantuan",
  "Broad",
  "Crooked",
  "Curved",
  "Deep",
  "Even",
  "Flat",
  "Hilly",
  "Jagged",
  "Round",
  "Shallow",
  "Square",
  "Steep",
  "Straight",
  "Thick",
  "Thin",
  "Cooing",
  "Deafening",
  "Faint",
  "Harsh",
  "High-pitched",
  "Hissing",
  "Hushed",
  "Husky",
  "Loud",
  "Melodic",
  "Moaning",
  "Mute",
  "Noisy",
  "Purring",
  "Quiet",
  "Raspy",
  "Screeching",
  "Shrill",
  "Silent",
  "Soft",
  "Squeaky",
  "Squealing",
  "Thundering",
  "Voiceless",
  "Whispering",
];
var object = [
  "Taco",
  "Operating System",
  "Sphere",
  "Watermelon",
  "Cheeseburger",
  "Apple Pie",
  "Spider",
  "Dragon",
  "Remote Control",
  "Soda",
  "Barbie Doll",
  "Watch",
  "Purple Pen",
  "Dollar Bill",
  "Stuffed Animal",
  "Hair Clip",
  "Sunglasses",
  "T-shirt",
  "Purse",
  "Towel",
  "Hat",
  "Camera",
  "Hand Sanitizer Bottle",
  "Photo",
  "Dog Bone",
  "Hair Brush",
  "Birthday Card",
];

export function generator() {
  return (
    adjective[Math.floor(Math.random() * adjective.length)] +
    " " +
    object[Math.floor(Math.random() * object.length)]
  );
}
