import { Request, Response } from 'express';
import { SerialPort } from 'serialport';
import { ReadlineParser } from 'serialport';

const parser = new ReadlineParser({delimiter: '\r\n'});

let finger: string;
const port = new SerialPort({
  path: '/dev/ttyUSB0',
  baudRate: 9600
});

port.pipe(parser);

port.on('open', () => {
  console.log('CONECTED in Arduino');
});

parser.on('data', (data) => {
  finger = `${data}`;
  console.log(finger);
});

export function getFinger(req: Request, res: Response) {
  res.json(finger);
}