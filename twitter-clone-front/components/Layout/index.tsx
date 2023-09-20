import { Box, Button, Container, Grid } from '@mui/material';
import React, { useState } from 'react';
import { IconsDef, buttonTitle } from '../../pages/consts';
import TwitterIcon from '@mui/icons-material/Twitter';
import RightSideBar from '../RightSideBar';
import { Home } from '../Home';

export const Layout = () => {
  const [selectedTabKey, setSelectedTabKey] = useState<string>(IconsDef[0].key);
  return (
    <Box maxWidth={900} sx={{ m: '0 auto' }}>
      <Grid container>
        {/* 左のサイドバー */}
        <Grid xs={3}>
          <Container sx={{ position: 'sticky', top: 12, zIndex: '1' }}>
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
          </Container>
        </Grid>

        {/* メイントピック */}
        <Grid xs={6}>
          <Home headerTitle={buttonTitle[selectedTabKey]} />
        </Grid>

        {/* 右のサイドバー（おすすめや検索） */}
        <Grid xs={3}>
          <RightSideBar />
        </Grid>
      </Grid>
    </Box>
  );
};
