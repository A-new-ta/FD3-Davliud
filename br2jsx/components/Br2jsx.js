import React from 'react';
import './Br2jsx.css';

  
export default props =>
<div className='Br2jsx'>
    {props.text.split(/<br\s*\/?>/i).reduce((arr, v, i) => {
        if (i > 0) arr.push(<br key={i} />);
        arr.push(v);
        return arr;
        },[])
    }
</div>



// export default props => {
        
//   let newArr = [];
  
//   {props.text.split(/<br\s*\/?>/i).forEach((v, i) => {
//       if (i > 0) newArr.push(<br key={i} />);
//       newArr.push(v)
//     });
//     return <div className='Br2jsx'>{newArr}</div>;
//   }
// }







