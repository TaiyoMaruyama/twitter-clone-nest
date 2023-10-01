import React, { FC, useEffect, useState } from 'react';

const testUserName = 'jon';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GifIcon from '@mui/icons-material/Gif';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import RoomIcon from '@mui/icons-material/Room';
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Grid,
  TextField,
  Divider,
  Button,
  Container,
} from '@mui/material';
import PostedFrame, { Post } from './common/PostedFrame';

export const Home: FC<{ headerTitle: string }> = ({ headerTitle }) => {
  const [selectedValue, setSelectedValue] = useState<
    'recommendation' | 'following'
  >('recommendation');
  const [allPost, setAllPost] = useState<Post[]>([]);
  const [inputText, setInputText] = useState<string>('');

  return (
    <Container>
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
      <Box sx={{ py: 1 }}>
        <Grid container>
          <Grid xs={1} justifyContent="center" alignItems="center">
            <AccountCircleIcon />
          </Grid>
          <Grid xs={11}>
            <TextField
              fullWidth
              placeholder="いまどうしてる？"
              multiline
              size="small"
              value={inputText}
              sx={{
                overflow: 'auto',
                '& fieldset': {
                  border: 'none',
                },
              }}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => {
                if (e.ctrlKey && e.key === 'Enter') {
                  setInputText('');
                }
              }}
            ></TextField>
          </Grid>
        </Grid>
        <Divider />
        <Box
          display="flex"
          justifyContent="space-between"
          sx={{ pt: 1, pb: 2 }}
        >
          <Box
            sx={{
              '& svg': {
                fontSize: 16,
              },
            }}
          >
            <InsertPhotoIcon />
            <GifIcon />
            <FormatListBulletedIcon />
            <SentimentSatisfiedAltIcon />
            <PendingActionsIcon />
            <RoomIcon />
          </Box>
          <Button
            variant="contained"
            sx={{
              fontSize: 12,
              p: '3px 8px',
              borderRadius: 4,
              fontWeight: 'bold',
            }}
            onClick={() => {
              setInputText('');
            }}
          >
            ポストする
          </Button>
        </Box>
      </Box>

      <Divider />
      {/* 投稿閲覧のフレーム */}
      <Box>
        {allPost.map((post) => (
          <PostedFrame postedInfo={post} />
        ))}
      </Box>
    </Container>
  );
};
