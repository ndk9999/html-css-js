// import playGuitar from './guitars.js';
// import {shredding as shred, plucking as fingerPicking} from './guitars.js';

// console.log(playGuitar());
// console.log(shred());
// console.log(fingerPicking());

import * as Guitars from './guitars.js';
import User from "./user.js";

console.log(Guitars.playGuitar());
console.log(Guitars.shredding());
console.log(Guitars.plucking());

const me = new User('pnv.2022@gmail.com', 'Phuc Nguyen');
console.log(me);
console.log(me.greeting());