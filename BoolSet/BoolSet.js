const _ = require('lodash')

let input = [
    'a', true,
    'b', true,
    'c', false,
    'd', true,
    'e', false
];

let modifiedInput = _(input).chunk(2);
                    console.log(' This is chunked: ' + modifiedInput + '\n' +
                                ' Chunked length: ' + modifiedInput.value().length );

modifiedInput = _(modifiedInput).fromPairs();
                    console.log(' From pairs: '+ modifiedInput );

// grouped by values
modifiedInput = _(modifiedInput).invertBy();
                    console.log(' InvertBy: ' + modifiedInput.value() + '\n' );

modifiedInput = _(modifiedInput).get('true');
                    console.log('\t Final result: ' + modifiedInput );
