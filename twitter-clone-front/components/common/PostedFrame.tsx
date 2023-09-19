import { Box, Divider, Grid, IconButton, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React, { FC } from 'react';
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BarChartIcon from '@mui/icons-material/BarChart';

export type PostedInfo = {
  id: string;
  userName: string;
  officialBudge: boolean;
  userId: string;
  // todo: APIのレスポンス次第で変更
  postedDuration: string;
  text: string;
  // bottomActionの有無はそれぞれのテーブルからidがら返却されたかどうかで判断
  reply?: string;
  rePost?: string;
  good?: string;
  analytics?: number;
};

const PostedFrame: FC<{ postedInfo: PostedInfo }> = ({ postedInfo }) => {
  // todo: postedInfoのidとuserのテーブルがいいねのテーブルにあるかどうかをチェックする

  const bottomActionIcons = [
    {
      key: 'ChatBubbleOutlineIcon',
      Component: ChatBubbleOutlineIcon,
    },
    {
      key: 'repeatIcon',
      Component: RepeatIcon,
    },
    {
      key: 'favoriteBorderIcon',
      Component: FavoriteBorderIcon,
    },
    {
      key: 'barChartIcon',
      Component: BarChartIcon,
    },
  ];
  return (
    <Box sx={{ py: 1 }}>
      <Grid container>
        <Grid xs={1} justifyContent="center" alignItems="center">
          <AccountCircleIcon />
        </Grid>
        <Grid xs={11}>
          <Box display="flex" alignItems="center">
            <Typography sx={{ fontSize: 16, fontWeight: 'bold' }}>
              {postedInfo.userName}
            </Typography>
            {postedInfo.officialBudge ? (
              <VerifiedIcon sx={{ fontSize: 18, color: 'lightblue' }} />
            ) : null}
            <Typography sx={{ fontSize: 12, color: 'grey' }}>
              {postedInfo.userId}
            </Typography>
          </Box>
          <Typography>{postedInfo.text}</Typography>
        </Grid>
      </Grid>
      <Box
        display="flex"
        justifyContent="space-around"
        width="100%"
        sx={{ '& svg': { fontSize: 14 } }}
      >
        {bottomActionIcons.map(({ key, Component }) => (
          <Box key={key} display="flex" alignItems="center">
            <IconButton>
              <Component />
            </IconButton>
            <Typography sx={{ fontSize: 12 }}>34</Typography>
          </Box>
        ))}
      </Box>
      <Divider />
    </Box>
  );
};

export default PostedFrame;
