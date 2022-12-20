const { Readable } = require("stream");

const inStream = new Readable({
    read() {}
});


inStream.push("Hello world, ");

inStream.push("my name is Deepanshu ");

inStream.push("mehra.");


inStream.push(null);

inStream.pipe(process.stdout)