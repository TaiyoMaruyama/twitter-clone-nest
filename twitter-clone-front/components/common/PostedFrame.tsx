import { Box, Divider, Grid, IconButton, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React, { FC } from 'react';
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BarChartIcon from '@mui/icons-material/BarChart';

export type Post = {
  userName: string;
  officialBudge: boolean;
  postedAt: Date;
  text: string;
  favorite: boolean;
  favoriteCount: number;
  analytics: number;
};

const PostedFrame: FC<{ postedInfo: Post }> = ({ postedInfo }) => {
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
        <Box display="flex" width="100%" justifyContent="space-between">
          <Box display="flex" alignItems="center">
            <ChatBubbleOutlineIcon />
            <Typography>dummy</Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <RepeatIcon />
            <Typography>dummy</Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <IconButton>
              <FavoriteBorderIcon />
            </IconButton>
            <Typography>123</Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <BarChartIcon />
            <Typography>dummy</Typography>
          </Box>
        </Box>
      </Box>
      <Divider />
    </Box>
  );
};

export default PostedFrame;
