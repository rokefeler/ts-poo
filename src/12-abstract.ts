import { Animal, Dog } from './09-protected';

//Para clases abastractas, solo funcionan las clases derivadas
//const animal = new Animal('elite'); //WRONG, porque la clase animal se puso como abstracta
//animal.greeting();

const cheis = new Dog('cheis', 'nico');
cheis.greeting();
cheis.woof(2);
