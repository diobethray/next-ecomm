import StarIcon from '@mui/icons-material/Star';
import Stack from '@mui/material/Stack';
import StarBorderIcon from '@mui/icons-material/StarBorder';

export default function StarReviews() {
  return (
    <Stack direction='row' sx={{
      '& svg': {
        color: 'secondary.contrastText'
      }
    }}>
      <StarIcon />
      <StarIcon />
      <StarIcon />
      <StarIcon />
      <StarBorderIcon />
    </Stack>
  );
}