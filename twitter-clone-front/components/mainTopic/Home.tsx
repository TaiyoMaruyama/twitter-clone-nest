import React, { FC, useState } from 'react';
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
} from '@mui/material';
import PostedFrame, { PostedInfo } from '../common/PostedFrame';

export const Home: FC<{ headerTitle: string }> = ({ headerTitle }) => {
  const [selectedValue, setSelectedValue] = useState('recommendation');

  const posts: PostedInfo[] = [
    {
      id: 'xxxx',
      userName: 'testAccount',
      officialBudge: true,
      userId: '@test-test',
      postedDuration: '8時間前',
      text: 'テストのための投稿です。テストのための投稿です。テストのための投稿です。',
      reply: 'xxxx',
      rePost: 'xxxx',
      good: 'xxxx',
      analytics: 900,
    },
    {
      id: 'xxxx',
      userName: 'テストアカウント',
      officialBudge: true,
      userId: '@test-test',
      postedDuration: '8時間前',
      text: 'こんばんは。',
      reply: 'xxxx',
      rePost: 'xxxx',
      analytics: 900,
    },
    {
      id: 'xxxx',
      userName: 'testAccount',
      officialBudge: true,
      userId: '@test-test',
      postedDuration: '8時間前',
      text: 'テストのための投稿です。テストのための投稿です。テストのための投稿です。',
      analytics: 900,
    },
    {
      id: 'xxxx',
      userName: 'testAccount',
      officialBudge: false,
      userId: '@test-test',
      postedDuration: '8時間前',
      text: 'テストのための投稿です。テストのための投稿です。テストのための投稿です。テストのための投稿です。テストのための投稿です。テストのための投稿です。テストのための投稿です。テストのための投稿です。',
      analytics: 900,
    },
    {
      id: 'xxxx',
      userName: 'testAccount',
      officialBudge: true,
      userId: '@test-test',
      postedDuration: '8時間前',
      text: 'test',
      analytics: 900,
    },
    {
      id: 'xxxx',
      userName: 'testAccount',
      officialBudge: false,
      userId: '@test-test',
      postedDuration: '8時間前',
      text: 'テストのための投稿です。テストのための投稿です。テストのための投稿です。',
      analytics: 900,
    },
    {
      id: 'xxxx',
      userName: 'testAccount',
      officialBudge: true,
      userId: '@test-test',
      postedDuration: '8時間前',
      text: 'テストのための投稿です。テストのための投稿です。テストのための投稿です。',
      analytics: 900,
    },
  ];

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
              sx={{
                overflow: 'auto',
                '& fieldset': {
                  border: 'none',
                },
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
            sx={{ fontSize: 8, p: '3px 8px', borderRadius: 4 }}
          >
            ポストする
          </Button>
        </Box>
      </Box>

      <Divider />
      {/* 投稿閲覧のフレーム */}
      <Box>
        {posts.map((post) => (
          <PostedFrame key={post.id} postedInfo={post} />
        ))}
      </Box>
    </>
  );
};
