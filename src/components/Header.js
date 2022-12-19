import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.theme);

  return (
    <Box mb='30px'>
      <Typography
        variant='h2'
        sx={{ mb: "5px", color: colors.grey[800], fontWeight: 700 }}
      >
        {title}
      </Typography>
      <Typography variant='h5' sx={{ color: colors.greenAccent[400] }}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
