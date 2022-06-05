import process from 'process';
import { Transform } from 'stream';

export const transform = async () => {
    class CounterTransform extends Transform {
        _transform(chunk, encoding, cb) {
          try {   
            let revers = chunk.toString().split('').reverse().join('');
            cb(null, revers)
          } 
          catch (err) {
            cb(err);
          }
        }   
    }

    const reversChunk = new CounterTransform();
    process.stdin.pipe(reversChunk).pipe(process.stdout);
};