import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import ImagePlaceholder from '@/app/ui/ImagePlaceholder';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/app/lib/store';
import { removeFromWishList } from '@/app/lib/wishlistSlice';
import Snackbar from '@mui/material/Snackbar';
import { useState } from 'react';
import {
  DataGrid,
  GridColDef,
  GridActionsCellItem,
  GridRowId,
  GridRenderCellParams,
} from '@mui/x-data-grid';

export default function WishlistModalContent() {
  const wishlistState = useSelector((state: RootState) => state.wishlist);
  const dispatch = useDispatch();
  const wishlist = wishlistState.wishlist;
  const [ snackbarState, setSnackbarState ] = useState(false);
  const [ snackbarMessage, setSnackbarMessage ] = useState('');

  const handleDeleteClick = (id: GridRowId) => () => {
    if (wishlist) {
      // dispatch remove wishlist
      dispatch(removeFromWishList(id as number));

      const index = wishlist.findIndex((w) => {
        return w.id === id;
      });
      const wishlistData = wishlist[index];
      setSnackbarMessage(`${wishlistData.title} was removed from wishlist!`);
      setSnackbarState(true);
    }
  };

  const columns: GridColDef[] = [
    { field: 'title', headerName: 'Title', width: 180, editable: false },
    {
      field: 'thumbnail',
      headerName: 'Thumbnail',
      width: 120,
      editable: false,
      renderCell: (params: GridRenderCellParams<any>) => (
        <ImagePlaceholder
          url={params.value}
          mobileWidth='100px'
          mobileHeight='100px'
          width='120px'
          height='120px'
          alt=''
        />
      )
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 100,
      cellClassName: 'actions',
      getActions: ({ id }) => {
        return [
          <GridActionsCellItem
            key={id}
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  return (
    <>
      <Box
        sx={{
          height: 500,
          width: '100%',
          '& .actions': {
            color: 'text.secondary',
          },
          '& .textPrimary': {
            color: 'text.primary',
          },
        }}
      >
        {wishlist && wishlist.length ? (
          <DataGrid
            rows={wishlist}
            columns={columns}
          />
        ) : (
          <></>
        )}
      </Box>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        open={snackbarState}
        message={snackbarMessage}
        ContentProps={{ sx: {
          backgroundColor: 'secondary.dark',
          fontWeight: 700
        } }}
        ClickAwayListenerProps={{
          onClickAway(event) {
            setSnackbarMessage('');
            setSnackbarState(false);
          },
        }}
      />
    </>
  );
}