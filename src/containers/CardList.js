import React from 'react';
import Card from './Card';

const Cardlist = ({robots}) => {
// if(true)
// {
// 	throw new Error('OOps Error Occured');
// }
return (
<div>
{
// 	robots.map((robot,i) => {
// 	return(
// <Card name={robots[i].name} email={robots[i].email} id= {robots[i].id} />
//         );
//     })
robots.map((robot,i) => {
	return(<Card name={robots[i].name} id={robots[i].id} email={robots[i].email} fb={robots[i].fb} linkedin ={robots[i].linkedin}/>);
})
}
</div>

	);

}

export default Cardlist;