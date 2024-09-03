function parseSTL(buffer) {
    const vertices = [];
    const dv = new DataView(buffer);
    let offset = 80;
    const triangleCount = dv.getUint32(80, true);
    offset += 4;

    for (let i = 0; i < triangleCount; i++) {
        const normal = {
            x: dv.getFloat32(offset, true),
            y: dv.getFloat32(offset + 4, true),
            z: dv.getFloat32(offset + 8, true)
        };
        offset += 12;

        for (let j = 0; j < 3; j++) {
            const vertex = {
                x: dv.getFloat32(offset, true),
                y: dv.getFloat32(offset + 4, true),
                z: dv.getFloat32(offset + 8, true)
            };
            offset += 12;
            vertices.push(vertex);
        }

        offset += 2;
    }

    return vertices;
}

function convert() {
    const msg = document.getElementById('message');
    const input1 = document.getElementById('input1');
    const output1 = document.getElementById('output1');
    const output2 = document.getElementById('output2');
    const output3 = document.getElementById('output3');

    const file = input1.files[0];
    const reader = new FileReader();

    message.textContent = 'Converting...';

    reader.onload = function (e) {
        const buffer = e.target.result;
        const vertices = parseSTL(buffer);

        let x = '';
        let y = '';
        let z = '';

        for (let i = 0; i < vertices.length; i++) {
            x += vertices[i].x + '\n';
            y += vertices[i].y + '\n';
            z += vertices[i].z + '\n';
        }

        output1.value = x;
        output2.value = y;
        output3.value = z;

        message.textContent = 'Conversion complete with ' + vertices.length + " vertices.";
    };

    reader.readAsArrayBuffer(file);

}

function DL_x() {

    const output1 = document.getElementById('output1');

    var text = output1.value;

    var filename = "x.txt";

    var blob = new Blob([text], { type: "text/plain" });
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        // For IE browser
        window.navigator.msSaveOrOpenBlob(blob, filename);
    } else {
        // For other browsers
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = filename;
        link.click();
    }

}

function DL_y() {

    const output2 = document.getElementById('output2');

    var text = output2.value;

    var filename = "y.txt";

    var blob = new Blob([text], { type: "text/plain" });
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        // For IE browser
        window.navigator.msSaveOrOpenBlob(blob, filename);
    } else {
        // For other browsers
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = filename;
        link.click();
    }

}

function DL_z() {

    const output3 = document.getElementById('output3');

    var text = output3.value;

    var filename = "z.txt";

    var blob = new Blob([text], { type: "text/plain" });
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        // For IE browser
        window.navigator.msSaveOrOpenBlob(blob, filename);
    } else {
        // For other browsers
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = filename;
        link.click();
    }

}

