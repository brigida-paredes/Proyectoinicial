function operaciones (num,operacion,cantidad)
{
	if (operacion=='+')
	{
	for (var i=1;i<=cantidad;i++)
	{
		
	console.log(num+operacion+i+"="+(num+i));

	}}
		if (operacion=='-')
		{
		for (var i=num;i<=cantidad;i++)
		{
		
		console.log(i+operacion+num+"="+(i-num));

		}	}
			if (operacion=='*')
				{
			for (var i=1;i<=cantidad;i++)
			{
		
			console.log(num+operacion+i+"="+(num*i));

			}
			}
				if (operacion=='/')
					{
					var c=0;
				console.log(c+operacion+1+"="+(c/1));
				for (var i=1;i<=cantidad-1;i++)
				{
		
				console.log(i+"/"+i+"="+(i/i));
				c=c+1;
				}
			}
		}
var numero=5
var operacion= "/"
var tamaño=20
console.log("tabla del" +numero+operacion+tamaño);
operaciones(numero,operacion,tamaño);