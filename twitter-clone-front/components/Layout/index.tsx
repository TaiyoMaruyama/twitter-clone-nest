import { Box, Button, Grid } from '@mui/material';
import React, { useState } from 'react';
import { IconsDef, buttonTitle } from '../../pages/consts';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Home } from '../mainTopic/Home';

export const Layout = () => {
  const [selectedTabKey, setSelectedTabKey] = useState<string>(IconsDef[0].key);
  return (
    <Box maxWidth={900} sx={{ m: '0 auto' }}>
      <Grid container>
        {/* 左のサイドバー */}
        <Grid xs={3}>
          <Box>
            <TwitterIcon />
          </Box>
          {IconsDef.map(({ key, Component }) => (
            <Grid key={key}>
              <Button
                startIcon={<Component sx={{ color: 'black' }} />}
                sx={{ color: 'black' }}
                onClick={() => setSelectedTabKey(key)}
              >
                {buttonTitle[key]}
              </Button>
            </Grid>
          ))}
        </Grid>

        {/* メイントピック */}
        <Grid xs={5}>
          <Home headerTitle={buttonTitle[selectedTabKey]} />
        </Grid>

        {/* 右のサイドバー（おすすめや検索） */}
        <Grid xs={4}>kokokokokok</Grid>
      </Grid>
    </Box>
  );
};
