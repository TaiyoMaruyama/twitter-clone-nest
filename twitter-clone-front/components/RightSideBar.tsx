import Search from '@mui/icons-material/Search';
import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';

const recommendationUsers = [
  {
    key: '1',
    userName: 'test',
  },
  {
    key: '2',
    userName: 'testUser',
  },
  {
    key: '3',
    userName: 'user',
  },
];

const RightSideBar = () => {
  return (
    <Box>
      <TextField
        size="small"
        placeholder="検索"
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
        sx={{
          bgcolor: 'lightgrey',
          borderRadius: 5,
          '& fieldset': {
            border: 'none',
          },
        }}
      />
      <Box
        sx={{
          bgcolor: 'lightgrey',
          borderRadius: 5,
          p: 1,
          my: 2,
        }}
      >
        <Typography sx={{ fontSize: 14, fontWeight: 'bold' }} paragraph>
          プレミアムにサブスクライブ
        </Typography>
        <Typography sx={{ fontSize: 12, fontWeight: 'bold' }} paragraph>
          サブスクライブして新機能を利用しましょう。資格を満たしている場合、広告収益配分を受け取れます。
        </Typography>
        <Button
          size="small"
          variant="contained"
          sx={{
            bgcolor: 'black',
            color: 'white',
            fontWeight: 'bold',
            borderRadius: 5,
            p: '3px 8px',
          }}
        >
          購入する
        </Button>
      </Box>
      <Box
        sx={{
          bgcolor: 'lightgrey',
          borderRadius: 5,
          p: 1,
          my: 2,
        }}
      >
        <Typography sx={{ fontSize: 14, fontWeight: 'bold' }} paragraph>
          いまどうしてる？
        </Typography>
        <Typography sx={{ fontSize: 12, fontWeight: 'bold' }} paragraph>
          サブスクライブして新機能を利用しましょう。資格を満たしている場合、広告収益配分を受け取れます。
        </Typography>
        <Button size="small">さらに表示</Button>
      </Box>

      {/* おすすめのユーザー */}
      <Box
        sx={{
          bgcolor: 'lightgrey',
          borderRadius: 5,
          p: 1,
          my: 2,
        }}
      >
        <Typography sx={{ fontSize: 14, fontWeight: 'bold' }} paragraph>
          おすすめのユーザー
        </Typography>
        {recommendationUsers.map((user) => (
          <Box
            key={user.key}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            sx={{ my: 1 }}
          >
            <Typography sx={{ fontSize: 14, fontWeight: 'bold' }}>
              {user.userName}
            </Typography>
            <Button
              size="small"
              variant="contained"
              sx={{
                bgcolor: 'black',
                color: 'white',
                fontWeight: 'bold',
                borderRadius: 5,
                p: '3px 8px',
              }}
            >
              フォローする
            </Button>
          </Box>
        ))}
        <Button size="small">さらに表示</Button>
      </Box>
    </Box>
  );
};

export default RightSideBar;
