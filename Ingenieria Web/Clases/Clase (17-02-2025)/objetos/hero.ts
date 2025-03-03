import basketPlayers from './Hero.interface';
import  basketBallPlayer from './Hero.interface';

// 1.Encontrar todos los jugadores que juegan en la posición de "Forward"
basketBallPlayers.filter(basketBallPlayer => basketBallPlayer.position)
.forEach(basketBallPlayer => console.log(basketBallPlayer.name));

// 2. Encontrar todos los jugadores que juegan en el equipo "Brooklyn Nets"

// 3. Ordenar a los jugadores por edad de mayor a menor estatura
// Si son cero, son iguales, si es positivo el primero es mayor y si es negativo el segundo es mayor
console.log(basketPlayers.sort((a, b) => b.age - a.age));
// Jugadores con edad  par
console.log(basketPlayers.sort((a, b) => b.age - a.age).filter((player) => player.age%2==0));





