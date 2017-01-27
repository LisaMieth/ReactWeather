var React = require('React');
var {Link} = require('react-router');


var Examples = (props) => {
    return(
        <div>
         <h1 className="text-center page-title">Examples</h1>
         <p>Here are a few example locations to try out</p>
         <ol>
          <li>
           <Link to='/?location=Sydney'>Sydney, SYD</Link>   
          </li>
          <li>
            <Link to='/?location=London'>London</Link>  
          </li>      
         </ol>    
        </div>
    )
};
module.exports = Examples;