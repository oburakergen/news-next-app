import { Stack, Grid, AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import Logo from "@/components/core/Logo";
import Searchbar from "@/components/core/Searchbar";
import { AccessAlarm } from "@mui/icons-material";
const IconList = () => {
  return (
    <>
      <AccessAlarm />
    </>
  );
};

const TopContainer = () => {
  return (
    <Grid
      container
      rowSpacing={4}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      className="tw-w-auto tw-justify-betweenf tw-p-4"
    >
      <Grid item xs={6} sm={6} md={3} className="tw-p-0">
        <Logo />
      </Grid>
      <Grid item xs={6} sm={12} md={6} className="tw-p-0 sm:tw-order-last xs:tw-order-last">
        <Searchbar />
      </Grid>
      <Grid item xs={6} sm={6} md={3} className="tw-p-0">
        <IconList />
      </Grid>
    </Grid>
  );
};

const BottomContainer = () => {
  return (
    <AppBar position="fixed" className="tw-mt-1 tw-top-14">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}></IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          News
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

const Header = () => {
  return (
    <Stack spacing={2}>
      <TopContainer />
      <BottomContainer />
    </Stack>
  );
};

export default Header;
