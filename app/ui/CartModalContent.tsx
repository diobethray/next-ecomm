import Box from '@mui/material/Box';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import ImagePlaceholder from '@/app/ui/ImagePlaceholder';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/app/lib/store';
import { removeFromCart, updateInCart } from '@/app/lib/cartSlice';
import Snackbar from '@mui/material/Snackbar';
import { MouseEventHandler, useState } from 'react';
import { useFormatter } from 'next-intl';
import {
  GridRowsProp,
  GridRowModesModel,
  GridRowModes,
  DataGrid,
  GridColDef,
  GridActionsCellItem,
  GridEventListener,
  GridRowId,
  GridRowModel,
  GridRowEditStopReasons,
  GridRenderCellParams,
} from '@mui/x-data-grid';

interface EditToolbarProps {
  setRows: (newRows: (oldRows: GridRowsProp) => GridRowsProp) => void;
  setRowModesModel: (
    newModel: (oldModel: GridRowModesModel) => GridRowModesModel,
  ) => void;
}

interface CartModalContentProps {
  onCheckout: MouseEventHandler<HTMLButtonElement>;
}

export default function CartModalContent( { onCheckout }: CartModalContentProps ) {
  const cartState = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const format = useFormatter();
  const cart = cartState.cart;
  const [ snackbarState, setSnackbarState ] = useState(false);
  const [ snackbarMessage, setSnackbarMessage ] = useState('');
  const [rows, setRows] = useState([...cart]);;
  const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({});

  const handleEditClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };


  const handleDeleteClick = (id: GridRowId) => () => {
    if (cart) {
      // dispatch remove wishlist
      dispatch(removeFromCart(id as number));

      const index = cart.findIndex((c) => {
        return c.id === id;
      });
      const cartData = cart[index];
      setSnackbarMessage(`${cartData.title} was removed from the cart!`);
      setSnackbarState(true);
    }
  };

  const handleCancelClick = (id: GridRowId) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });
  };

  const processRowUpdate = (newRow: GridRowModel) => {
    // dispatch new values
    if (newRow && newRow.quantity > 0) {
      dispatch(updateInCart(newRow));
      setSnackbarMessage(`${newRow.title} quantity was updated in the cart!`);
      setSnackbarState(true);
    }
    // updating the grid
    const updatedRow = { ...newRow, isNew: false };
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const handleRowEditStop: GridEventListener<'rowEditStop'> = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const columns: GridColDef[] = [
    { field: 'title', headerName: 'Title', width: 200, editable: false },
    {
      field: 'thumbnail',
      headerName: 'Thumbnail',
      width: 150,
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
      field: 'price',
      headerName: 'Price',
      width: 100,
      editable: false,
      renderCell: (params: GridRenderCellParams<any>) => (
        <div className="MuiDataGrid-cellContent" title={params.value} role="presentation">{format.number(params.value, {style: 'currency', currency: 'USD'})}</div>
      )
    },
    { field: 'quantity', headerName: 'Quantity', type: 'number', width: 100, editable: true },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 100,
      cellClassName: 'actions',
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              key={id}
              icon={<SaveIcon />}
              label="Save"
              sx={{
                color: 'primary.main',
              }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              key={id}
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            key={id}
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
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

  // calculate total price
  const calculateTotal = () => {
    let totalPrice = 0;
    if (cart && cart.length) {
      cart.forEach((c) => {
        let totalPricePerProduct = 0;
        if (c.quantity && c.price) {
          totalPricePerProduct = c.price * c.quantity;
        }
        totalPrice += totalPricePerProduct;
      });
    }
    return totalPrice;
  };

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
        {cart && cart.length ? (
          <>
            <Box sx={{ height: 350 }}>
              <DataGrid
                rows={cart}
                columns={columns}
                editMode="row"
                disableRowSelectionOnClick
                rowModesModel={rowModesModel}
                onRowModesModelChange={handleRowModesModelChange}
                onRowEditStop={handleRowEditStop}
                processRowUpdate={processRowUpdate}
                slotProps={{
                  toolbar: { setRows, setRowModesModel },
                }}
              />
            </Box>
            <Box>
              <Grid container>
                <Grid item xs={12} md={6} sx={{ display: {xs: 'none', md: 'flex'} }}></Grid>
                <Grid item xs={12} md={6}>
                  <Stack direction='row' sx={{
                    justifyContent: 'flex-end',
                    mt: '20px',
                    mr: '20px',
                    alignItems: 'center',
                    '& h3': {
                      ml: '10px'
                    }
                  }}>
                    <Typography variant='h4'>Total: </Typography>
                    <Typography variant='h3'>{format.number(calculateTotal(), {style: 'currency', currency: 'USD'})}</Typography>
                    {/* TODO: Show savings here */}
                  </Stack>
                  <Button onClick={(e) => onCheckout(e)} variant='contained' sx={{
                    color: '#fff',
                    backgroundColor: 'primary.contrastText',
                    fontSize: 14,
                    width: 200,
                    display: 'block',
                    mr: 0,
                    ml: 'auto',
                    mt: '25px'
                  }}>CHECKOUT</Button>
                </Grid>
              </Grid>
            </Box>
          </>
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
      <IconButton
        onClick={(e) => onCheckout(e)}
        sx={{
          position: 'absolute',
          top: '10px',
          right: '10px'
        }}
      ><CancelIcon/></IconButton>
    </>
  );

}