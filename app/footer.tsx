import { Divider, Typography } from '@mui/material'

export default function Footer() {
  return (
    <footer>
      <Divider sx={{ mt: '2%' }} />
      <Typography sx={{ mt: 2, mb: 2, fontSize: '0.6em', textAlign: 'center' }}>
        Created using NextJS, Material UI, Cloudflare.
        <br />
        This site does not collect your personal data.
      </Typography>
    </footer>
  )
}
