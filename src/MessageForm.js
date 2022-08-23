import {Box, TextField, Button, Grid} from "@mui/material";

function MessageForm( {inputText, inputAuthor, sendMessage} ) {
  return (
    <Grid item md={4} >
      <Box component="form" noValidate
           autoComplete="off" mt={4} display="flex"
           flexDirection="column" onSubmit={sendMessage}>
        <TextField id="author" label="Имя" sx={{ m: 2}}/>
        <TextField id="text" label="Текст" sx={{ m: 2}}/>
        <Button type="submit">Отправить</Button>
      </Box>
    </Grid>
  )
}

export default MessageForm;