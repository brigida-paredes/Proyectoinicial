function contador(cadena,letra)
{
var i=0;
var cont=0;
while (i<cadena.length)
{
		if (cadena[i]===letra)
		{
			cont++;
			break;
		}
		

i++;
}
return cont
}
var frase="Holaaaaaa mundoa";

console.log("cantidad de letras a es:"+ contador(frase,'o'));