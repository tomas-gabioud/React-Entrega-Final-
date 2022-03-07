import React  from 'react';
import Item from './Item';



export default function ItemList({item}) {
  return (
    <>
      <div className='gridDos'>
        {
          item.map((e, i) => <Item item={e} key={i} />)
        }
      </div>
    </>
  )
}
