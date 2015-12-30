var areaY=500;


function entrar()
{

	var canvas = document.getElementById('miCanvas');

	var ctx = canvas.getContext('2d');
	ctx.fillStyle="rgb(0,0,0)";

	var lon=document.getElementById('alt').value;
	lon=lon.split(" ");
	var ln=lon.length;
	alert(ln);
	var ma=parseInt(lon[0]);
	for(i=0;i<ln;i++)
	{
		if(ma<parseInt(lon[i]))
		ma=lon[i];
	}
	alert(ma);

	lineas(ctx,lon);

	ctx.beginPath();
	ctx.moveTo(0,500);
	for(var i=0;i<=lon.length;i++)
	{
		v=Math.floor((lon[i]*100)/ma)*4;
		alert(v);
		ctx.fillRect((i*40)+15,460,30,-v);

	}


}

function lineas(ctx,lon)
{
	ctx.beginPath();
	ctx.moveTo(40,500);
	for(var i=1;i<=lon.length;i++)
	{
		ctx.lineTo(i*40+15,areaY-lon[i-1],30,lon[i-1]);
		ctx.arc(i*40+15,areaY-lon[i-1],5, 0,Math.PI*2,true);
		ctx.fillText(lon[i-1],i*40+15,480-lon[i-1]);
		ctx.strokeStyle ="rgb(0,0,0)";
	}
	ctx.stroke();
}



