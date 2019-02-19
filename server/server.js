



var http = require( 'http' )
var path = require( 'path' )
var fs = require( 'fs' )



var port = process.env.PORT || 7700


var app = http.createServer( ( request, response ) => {
	// Fetch necessary files based on the given request
	var suffix = path.extname( request.url ).slice( 1 )
	var json = JSON.parse( fs.readFileSync( './server/mime.json' ) )
	var mime = json.mime.find( type => type[ suffix ] )
	// Identify the correct url and mime type for the file
	var identity = mime ? mime[ suffix ] : 'text/html'
	var url = mime ? path.basename( request.url ) : 'index.html'
	// Dynamically render the requested assets or html
	if ( suffix != 'ico' ) {
		var stream = fs.createReadStream( './public/' + url )
		response.setHeader( 'Content-Type', identity )
		stream.on( 'close', ( ) => response.end( ) )
		// Omit file read stream errors for the time being
		/* stream.on( 'error', error => { throw error } ) */
		stream.pipe( response )
	}
	// Alternative method for handling retrieved assets
	/* fs.readFile( './public/' + url, ( error, data ) => {
		response.setHeader( 'Content-Type', identity )
		data ? response.write( data ) : null
		response.end( )
	} ) */
} )


app.listen( port, ( ) => {
	console.log( '\nNode.js server running on port ' + port + '!\n\n' )
} )



