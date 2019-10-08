import React from 'react';
import 'tachyons';


const card = ({id,name,email,fb,linkedin}) => {
return (
<div className = 'tc bg-light-green dib br3 pa3 ma2  bw2  shadow-5'>
<a href={`${fb}`}>
<img src={`https://robohash.org/${id}?200x200`} alt='loading' />
</a>
<h2>{name}</h2>
<a href={`${linkedin}`}>
<p>{email}</p>
</a>

</div>

	);
} 

export default card;