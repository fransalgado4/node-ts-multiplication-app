import * as fs from "fs";
import { yarg } from "./config/plugins/yargs.plugin";

const { b: base, l: limit, s: showTable } = yarg;

const tabla: number = base;

const rutaCarpeta = `./outputs`;
const rutaArchivo = `outputs/tabla-${base}x${limit}.txt`;

fs.mkdirSync(rutaCarpeta, { recursive: true });

const headerText: string = `
=======================================
            Tabla del ${tabla}
=======================================\r\n
`;
let text: string = "";

for (let i = 1; i <= limit; i++) {
  let multiplicacion = tabla * i;
  text += `${tabla} x ${i} = ${multiplicacion}\r\n`;
}

const textCompleto = headerText + text;

if (showTable) {
  console.log(textCompleto);
}

fs.writeFileSync(rutaArchivo, textCompleto);
