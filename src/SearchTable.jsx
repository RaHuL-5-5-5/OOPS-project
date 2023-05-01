import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import MyButton1 from './MyButton1';
import MyButton2 from './MyButton2'
const data=[{
  SNo:1,
  name:"Hemanth",
  Affiliation:"Student",
  button1:<MyButton1  />,
  button2:<MyButton2  />
 },
 {
  SNo:2,
  name:"Rahul",
  Affiliation:"Student",
  button1:<MyButton1  />,
  button2:<MyButton2  />
 }
 ];
const SearchTable = () =>{
  const columns= useMemo(
    () => [{
    Header:'S.No',
    columnId:1,
    accessorKey:'SNo'},
    {
      Header:'Name',
      columnId:2,
      accessorKey:'name'
    },
      {
        Header:'Affiliation',
        columnId:3,
        accessorKey:'Affiliation'
      },
      {
        Header:" ",
        columnId:4,
        accessorKey:'button1'
      },
      {
        Header:" ",
        columnId:5,
        accessorKey:'button2'
      },
    ],
    [],
  );
  return (<div  className='SearchTable'>
    <MaterialReactTable 
      columns={columns}
      data={data}
      enableColumnActions={false}
      enableColumnFilters={false}
      enablePagination={false}
      enableSorting={false}
      enableBottomToolbar={false}
      enableTopToolbar={false}
      muiTableBodyRowProps={{ hover: false }}
      muiTableHeadCellProps={{
  sx: theme => ({
    background: '#f1f1f1',
    borderRight: '1px solid rgba(224,224,224,1)',
    color: theme.palette.text.primary
  })
}}
    /></div>
  );
}

//    return (<div className="SearchTable">
//  <div className='SearchHeading'> 
//    <p>S.No</p>
//    <p>Name</p>
//    <p>Affilation</p>
//    <p></p>
//    <p></p>
//    </div>
//    <div className='SearchResults'>
//     <p>1.</p>
//     <p>Sainath Reddy</p>
//     <p>Student</p>
//     <button type="button" class="btn btn-info">Schedule a meet</button>
//     <button type="button" class="btn btn-info">Add to requests</button>
//    </div>
//    </div>)
   
   
   
   
   



export default SearchTable;

