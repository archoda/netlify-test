const securityHeaders = {
	'Cross-Origin-Embedder-Policy': 'require-corp',
	'Cross-Origin-Opener-Policy': 'same-origin',
	'X-XSS-Protection': '0',
}


export const handle = async ({ event, resolve }) => 
{
    
	// Handle append ip to request
	event.request.ip = event.getClientAddress();

	// Handle response resolve
	let response = await resolve( event );

	Object.entries(securityHeaders).forEach(
		([header, value]) => response.headers.set(header, value)
	);

	return response;
}
