const mainCanvas = document.getElementById("mainCanvas");
const gl = mainCanvas.getContext("webgl");

main();



function main(){

	mainCanvas.width = innerWidth - 50;
	mainCanvas.height = innerHeight - 50;

	if(!gl){
		alert("Unable to initialize WebGL.");
		return;
	}

	gl.clearColor(0.0, 0.0, 0.0, 1.0);
	gl.clear(gl.COLOR_BUFFER_BIT);

}