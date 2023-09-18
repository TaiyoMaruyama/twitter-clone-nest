import { Box, Button, Grid } from '@mui/material';
import React from 'react';
import { IconsDef, buttonTitle } from '../../pages/consts';
import TwitterIcon from '@mui/icons-material/Twitter';

export const Layout = () => {
  return (
    <Box width={900} sx={{ m: '0 auto' }}>
      <Grid container>
        {/* 左のサイドバー */}
        <Grid xs={2}>
          <Box>
            <TwitterIcon />
          </Box>
          {IconsDef.map(({ key, Component }) => (
            <Button
              key={key}
              startIcon={<Component sx={{ color: 'black' }} />}
              sx={{ color: 'black' }}
            >
              {buttonTitle[key]}
            </Button>
          ))}
        </Grid>

        {/* メイン */}
        <Grid xs={6}>kokoko</Grid>

        {/* 右のサイドバー（おすすめや検索） */}
        <Grid xs={4}>kokokokokok</Grid>
      </Grid>
    </Box>
  );
};
