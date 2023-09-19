import {
  Box,
  Button,
  Divider,
  Grid,
  Tab,
  Tabs,
  TextField,
  Typography,
} from '@mui/material';
import React, { FC, useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GifIcon from '@mui/icons-material/Gif';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import RoomIcon from '@mui/icons-material/Room';

export const Home: FC<{ headerTitle: string }> = ({ headerTitle }) => {
  const [selectedValue, setSelectedValue] = useState('recommendation');

  return (
    <>
      <Box>
        <Typography sx={{ fontWeight: 'bold' }}>{headerTitle}</Typography>
      </Box>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={selectedValue}
          centered
          onChange={(_, value) => setSelectedValue(value)}
        >
          <Tab label="おすすめ" value="recommendation" sx={{ width: '50%' }} />
          <Tab label="フォロー中" value="following" sx={{ width: '50%' }} />
        </Tabs>
      </Box>

      {/* 投稿フレーム */}
      <Box>
        <Grid container>
          <Grid xs={1} justifyContent="center" alignItems="center">
            <AccountCircleIcon />
          </Grid>
          <Grid xs={11}>
            <TextField
              fullWidth
              placeholder="いまどうしてる？"
              size="small"
              sx={{
                '& fieldset': {
                  border: 'none',
                },
              }}
            ></TextField>
          </Grid>
        </Grid>
        <Divider />
        <Box display="flex" justifyContent="space-between" sx={{ py: 1 }}>
          <Box>
            <InsertPhotoIcon sx={{ fontSize: 16 }} />
            <GifIcon sx={{ fontSize: 16 }} />
            <FormatListBulletedIcon sx={{ fontSize: 16 }} />
            <SentimentSatisfiedAltIcon sx={{ fontSize: 16 }} />
            <PendingActionsIcon sx={{ fontSize: 16 }} />
            <RoomIcon sx={{ fontSize: 16 }} />
          </Box>
          <Button
            variant="contained"
            sx={{ fontSize: 8, p: '3px 8px', borderRadius: 4 }}
          >
            ポストする
          </Button>
        </Box>
      </Box>
    </>
  );
};
