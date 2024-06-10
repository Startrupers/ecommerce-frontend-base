"use client";

import "./Sidebar.css";

import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

interface SidebarProps {
  isOpen: boolean;
  onOpen: (
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

export function Sidebar({ isOpen, onOpen }: SidebarProps) {
  const renderList = () => (
    <Box
      className="sidebar"
      role="presentation"
      onClick={onOpen(false)}
      onKeyDown={onOpen(false)}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? "<InboxIcon />" : "<MailIcon />"}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? "<InboxIcon />" : "<MailIcon />"}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <SwipeableDrawer
      anchor={"right"}
      open={isOpen}
      onClose={onOpen(false)}
      onOpen={onOpen(true)}
    >
      {renderList()}
    </SwipeableDrawer>
  );
}
