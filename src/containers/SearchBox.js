import React from 'react';
// import tachyons from 'tachyons';

const SearchBox = ({searchchange}) => {
return (
	<div className='pa3  bg-light-blue dib br3 grow pa2 ma2 mb2  bw4   shadow-5 w5  '>
<input type='text'  placeholder='enter robots name' onChange={searchchange}/>	

</div>
);


}
export default SearchBox;