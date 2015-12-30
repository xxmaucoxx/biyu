var areaY=500;
var dr=1;
var rx1=0;
var rx2=0;
var dy=0;
var y=0;

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
	//alert(ma);


	ctx.beginPath();
	ctx.moveTo(0,500);


	for(var i=0;i<lon.length;i++)
	{
		v=Math.floor((lon[i]*100)/ma)*4;
		alert('esto '+ v);

		if(v<=0)
		{
			y+=1;
		}

		ctx.fillRect((i*40)+30,500,25,y);
	

	}

	ctx.stroke();
	setTimeout("animar()",50);

}

