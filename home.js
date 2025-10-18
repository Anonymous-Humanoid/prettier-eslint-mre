/**
 * Returns the homepage as inline HTML code
 * @param {number} code 
 * @returns {(msg?: string) => string} 
 */
export default function Home(code)
{
    return (code === 418 ? function(msg){return `<h1>${code} - ${msg ?? 'We messed up real bad!'}</h1>`;}
        : ()=>`<h1>${code} - I'm a teapot!</h1>`+
            '<p>The server is refusing to attempt to brew coffee with a teapot. '
            +'Please ask the RFC to implement a coffee machine protocol.</p>'
);
}
