"use client";

import { Stack, IconButton } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

export default function ShareButtons() {
  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied!");
  };

  return (
    <Stack direction="row" spacing={2}>
      <IconButton color="primary" onClick={() => window.open(`https://twitter.com/share?url=${encodeURIComponent(window.location.href)}`, "_blank")}>
        <ShareIcon />
      </IconButton>

      <IconButton color="secondary" onClick={copyLink}>
        <ContentCopyIcon />
      </IconButton>
    </Stack>
  );
}
