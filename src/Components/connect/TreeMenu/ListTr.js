import React from 'react';

const ListDetail = ( {lists, listClick} ) => {
  return (
    <tbody>
      {lists.map( (index, i) => {
          return (
              <tr key={index.id} style={{display: index.collapse ? 'none' : 'table-row'}}>
                <td align='center'>{index.id}</td>
                <td onClick={ () => listClick(index, index.collapse1) } style={{paddingLeft: index.level * 15 + 'px'}}>
                  { index.hasChild ? index.collapse ? <span className='open'>+</span> : <span className='open'>-</span> : '' }
                  {index.name}
                </td>
                <td>{index.remarks}</td>
              </tr>
          )
      } )}
    </tbody>
  )
}

export default ListDetail;
