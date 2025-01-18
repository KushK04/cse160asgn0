
function main() {
    // Retrieve <canvas> element <- (1)
    var canvas = document.getElementById('example');
    if (!canvas) {
        console.log('Failed to retrieve the <canvas> element');
        return;
    }
    // Get the rendering context for 2DCG <- (2)
    var ctx = canvas.getContext('2d');

    // Draw a black rectangle <- (3)
    ctx.fillStyle = 'rgba(0, 0, 0, 1.0)'; // Set a black color
    ctx.fillRect(0, 0, canvas.width, canvas.height); // Fill a rectangle with the color
 }  

function angleBetween(v1, v2){
    let dot = Vector3.dot(v1, v2)
    return Math.acos((dot / (v1.magnitude() * v2.magnitude()))) * (180 / Math.PI)
}

function areaTriangle(v1, v2){
    let v3 = Vector3.cross(v1,v2); 
    return v3.magnitude() * 0.5;
}

function handleDrawEvent(){
    var canvas = document.getElementById('example');
    if (!canvas) {
        console.log('Failed to retrieve the <canvas> element');
        return;
    }
    var ctx = canvas.getContext('2d');


    //Clear Canvas
    ctx.fillStyle = 'rgba(0, 0, 0, 1.0)'; // Set a black color
    ctx.fillRect(0, 0, canvas.width, canvas.height); // Fill a rectangle with the color

    let v1x = document.getElementById('v1X').value;
    let v1y = document.getElementById('v1Y').value;
    let v1 = new Vector3([v1x, v1y, 0]);
    drawVector(v1, "red")

    let v2x = document.getElementById('v2X').value;
    let v2y = document.getElementById('v2Y').value;
    let v2 = new Vector3([v2x, v2y, 0]);
    drawVector(v2, "blue")
}

function handleDrawOperationEvent(){
    var canvas = document.getElementById('example');
    if (!canvas) {
        console.log('Failed to retrieve the <canvas> element');
        return;
    }
    var ctx = canvas.getContext('2d');


    //Clear Canvas
    ctx.fillStyle = 'rgba(0, 0, 0, 1.0)'; // Set a black color
    ctx.fillRect(0, 0, canvas.width, canvas.height); // Fill a rectangle with the color
    
    let v1x = document.getElementById('v1X').value;
    let v1y = document.getElementById('v1Y').value;
    let v1 = new Vector3([v1x, v1y, 0]);
    drawVector(v1, "red")

    let v2x = document.getElementById('v2X').value;
    let v2y = document.getElementById('v2Y').value;
    let v2 = new Vector3([v2x, v2y, 0]);
    drawVector(v2, "blue")   

    let op = document.getElementById('operation').value;
    let scalar = document.getElementById('scalar').value;

    let v3 = new Vector3();
    v3.set(v1)
    let v4 = new Vector3();
    v4.set(v2);

    if (op == "add"){
        v3.add(v2);
        drawVector(v3, "green");
    } else if (op == "sub"){
        v3.sub(v2);
        drawVector(v3, "green");
    } else if (op == "mul"){
        v3.mul(scalar);
        v4.mul(scalar);
        drawVector(v3, "green");
        drawVector(v4, "green");
    } else if (op == "div"){
        v3.div(scalar);
        v4.div(scalar);
        drawVector(v3, "green")
        drawVector(v4, "green")
    } else if (op == "mag"){
        console.log(`Magnitude v1: ${v1.magnitude()}`)
        console.log(`Magnitude v2: ${v2.magnitude()}`)
    } else if (op == "norm"){
        v3.normalize();
        v4.normalize();
        drawVector(v3, "green");
        drawVector(v4, "green");
    } else if (op == "ang"){
        console.log(angleBetween(v1,v2))
    } else if (op == "area"){
        console.log(areaTriangle(v1, v2))
    }

}
 
function drawVector(v, color){
    var canvas = document.getElementById('example');
    if (!canvas) {
        console.log('Failed to retrieve the <canvas> element');
        return;
    }
    var ctx = canvas.getContext('2d');

    var x = v.elements[0] * 20;
    var y = v.elements[1] * 20;

    var originX = canvas.width/2
    var originY = canvas.height/2

    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(originX, originY)
    ctx.lineTo(originX+x, originY-y)
    ctx.stroke();
}